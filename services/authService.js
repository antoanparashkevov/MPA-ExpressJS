const bcrypt = require('bcrypt')
const User = require('../models/User')

async function register() {
    
}

async function login(username, password) { 
    return new Promise((res,rej) =>{
        if(username.toLowerCase() === 'peter' && password === '123456') {
            res({
                _id:'12345a',
                username: 'Peter',
                roles: ['user']
            })
        } else {
            rej(new Error('Incorrect username and password'))
        }
    })
}

module.exports = {
    login,
    register
}