const fs = require('fs')

const path = './models/data.json'
const data = JSON.parse(fs.readFileSync(path))

function executor(res,rej) {
    fs.writeFile(path,JSON.stringify(data), (err =>{
        if(err === null){
            res();
        }else{
            rej(err)
        }
    }))
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

module.exports = {
    getAll,
    getById
}