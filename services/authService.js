const bcrypt = require('bcrypt')
const User = require('../models/User')

async function register(username, password) {
    //will return undefined (falsy value), or the record 
    const existing = User.findOne({
        username: {
            $regex: new RegExp(username),
            $options: 'i'//case insensitive
        }
    })
    const hashedPassword = await bcrypt.hash(password,10) // async operation
    if(existing) {
        throw new Error('Username is taken! Try again with other username!')
    }
    
    //will return the newly created record
    const userData = await User.create({
        username,
        hashedPassword
    })
    
    return {
        username,
        roles: userData.roles
    }
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