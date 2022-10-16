const Facility = require('../models/Facility')

const getAllFacilities = function() {
    return Facility.find({}).lean()
}

const createFacility =  function(label, iconUrl){
    return Facility.create({
        label,
        iconUrl
    })
}

module.exports = {
    getAllFacilities,
    createFacility
}