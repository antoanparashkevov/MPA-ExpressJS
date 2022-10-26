const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        minLength: 3,
        required: true,
        
    },
    hashedPassword: {
        type: String,
        required: true
    },
    roles:{
        type: [String],
        enum: ['user','admin'],
        default: ['user']
    }
})

const User = model('User', userSchema)

module.exports = User;

