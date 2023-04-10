const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    username: {
        type: String,
        minlength: [3, 'Username must be at least 3 characters long'],
        required: true,
        
    },
    hashedPassword: {
        type: String,
        required: true
    },
    roles:{
        type: [
            {type: String, enum: ['user', 'admin']}
        ],
        default: ['user']
    }
})

const User = model('User', userSchema)

module.exports = User;

