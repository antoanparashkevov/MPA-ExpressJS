const Facility = require('../models/Facility')
const Room = require('../models/Room')
const getAllFacilities = function() {
    return Facility.find({}).lean()
}

const createFacility =  function(label, iconUrl){
    return Facility.create({
        label,
        iconUrl
    })
}

const addFacilities = async function(roomId, facilityIds) {
    const room = await Room.findById(roomId)
    console.log(room);
    const facilities = await Facility.find({_id: { $in: facilityIds}})
    console.log(facilities)
}

module.exports = {
    getAllFacilities,
    createFacility,
    addFacilities
}