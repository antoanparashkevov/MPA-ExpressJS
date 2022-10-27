const {Schema, model, Types: {ObjectId}} = require('mongoose')

const roomSchema = new Schema({

    location: {type: String, default: '', required: true},
    name: {type: String, default: '', required: true},  
    price: {type: Number, min: 0.01, required: true},
    description: {type: String, default: '', required: true},
    imgURL: {type: String, default: ''},
    beds:{type: Number, min: 1, required: true},
    facilities:{type: [ObjectId], default: [], ref: 'Facility'},
    owner: {type: ObjectId, ref: 'User', required: true}
})

const Room = model('Room',roomSchema)

module.exports = Room