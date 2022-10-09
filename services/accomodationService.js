const fs = require('fs')

const path = './models/data.json'
const data = JSON.parse(fs.readFileSync(path))

function executor(res,rej) {
    fs.writeFile(path,JSON.stringify(data), err =>{
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

function getAll(){
    return data;
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
    data.push(room)
    await persist();
    return room;
}

module.exports = {
    getAll,
    getById,
    create
}