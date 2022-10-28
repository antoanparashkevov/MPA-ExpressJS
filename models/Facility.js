const {Schema, model, Types } = require('mongoose')

const facilitySchema = new Schema({
    label: {type: String, required: true},
    iconUrl: {type: String, minlength: [1, 'The Icon Url must be at least 1 symbol long'], default: '/static/icons'},
    rooms: {type: [Types.ObjectId], ref: 'Room', default: []}
})


//our collection
const Facility = model('Facility', facilitySchema)

module.exports = Facility;

