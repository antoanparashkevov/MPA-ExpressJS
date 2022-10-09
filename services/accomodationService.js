const fs = require('fs')

const path = './models/data.json'
const data = JSON.parse(fs.readFileSync(path))

function executor(res,rej) {
    fs.writeFile(path,JSON.stringify(data, null, 2), err =>{
        if(err === null){
            res();
        }else{
            rej(err)
        }
    })
}

async function persist(){
    return new Promise(executor)
}

function getAll(queries){
    const search = queries.name.toLowerCase()
    return data
        .filter(room=>room.name.toLowerCase().includes(search) || room.description.includes(search))
        .filter(room=>room.price >= queries.fromPrice && room.price <= queries.toPrice)
        .filter(room=>room.location.toLowerCase().includes(queries.location.toLowerCase()))
}

function getById(id){
    return data.find(i=>i.id === id)
}

async function create(roomData){
    const id = (Math.random() * 9999 | 0).toString().slice(-4);
    const room = {
        id,
        location: roomData.location,
        name: roomData.name,
        price: +roomData.price,
        description: roomData.desc,
        imgURL: roomData.img,
        beds: +roomData.beds
    }
    const missing = Object.entries(room).filter(prop=>!prop[1])
    if(missing.length > 0){
        throw new Error(missing.map(entry=> `${entry[0]} is required`).join('\n'))
    }
    data.push(room)
    await persist();
    return room;
}

module.exports = {
    getAll,
    getById,
    create,
    
}