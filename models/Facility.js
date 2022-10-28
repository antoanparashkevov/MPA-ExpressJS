const {Schema, model, Types } = require('mongoose')

const facilitySchema = new Schema({
    label: {type: String, required: true, default: ''},
    iconUrl: {type: String, required: true, default: '/static/icons'},
    rooms: {type: [Types.ObjectId], ref: 'Room', default: []}
})


//our collection
const Facility = model('Facility', facilitySchema)

module.exports = Facility;

