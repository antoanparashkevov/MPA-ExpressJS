const {Schema, model, Types} = require('mongoose')

const URL_REGEX = /^(https?:\/)?\/.*$/i

const roomSchema = new Schema({

    name: {type: String, required: true},
    description: {type: String, required: true},
    location: {type: String, required: true},
    beds:{type: Number, min: [1, 'Must supply at least 1 bed to your accommodation'], required: true},
    price: {type: Number, min: [0.01, 'Price must be a positive number'], required: true},
    imgURL: {
        type: String,
        validate: {
            validator: (value) => URL_REGEX.test(value),
            message: (props) =>{
                console.log('All props from validation process (ImgURL)', props)
                return `${props.value} is not a valid Image Url`
            }
        }
    },
    facilities:{type: [Types.ObjectId], default: [], ref: 'Facility'},
    owner: {type: Types.ObjectId, ref: 'User', required: true}
})

const Room = model('Room',roomSchema)

module.exports = Room