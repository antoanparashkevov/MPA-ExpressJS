const {Schema, model} = require('mongoose')

const roomSchema = new Schema({

    location: {type: String, default: '', required: true},
    name: {type: String, default: '', required: true},  
    price: {type: Number, min: 0.01, required: true},
    description: {type: String, default: '', required: true},
    imgURL: {type: String, default: '', required: true},
    beds:{type: Number, min: 1, required: true},
})

const Room = model('Room',roomSchema)
module.exports = Room