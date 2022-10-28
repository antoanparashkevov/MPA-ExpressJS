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
    const room = await Room.findById(roomId).populate('facilities')
    const facilities = await Facility.find({_id: { $in: facilityIds } })
    console.log('checked facilities >>>', facilities)
    
    //since we populate facilities array, now it's not full of ids, it contents real facility objects
    const facilitiesToRemove = room.facilities.filter(f=> facilities.every(x=>x._id.toString() !== f._id.toString()));
    console.log('facility to remove >>> ',facilitiesToRemove);
    
    facilitiesToRemove.forEach(f=>{
        f.rooms.splice(f.rooms.findIndex(rId=> rId.toString() === roomId),1);
        room.facilities.splice(room.facilities.findIndex(facility=>facility._id.toString() === f._id.toString()),1)
    })
    
    const newlyAddedFacilities = facilities.filter(f=> room.facilities.every(x=>x._id.toString() !== f._id.toString()))
    console.log('facility to add >>>',newlyAddedFacilities)
    
    newlyAddedFacilities.forEach(fObject=> {
        room.facilities.push(fObject);
        fObject.rooms.push(room)
    })
    
    await room.save();
    await Promise.all(facilitiesToRemove.map(f=>f.save()))
    await Promise.all(newlyAddedFacilities.map(f=>f.save()))
    
}

module.exports = {
    getAllFacilities,
    createFacility,
    addFacilities
}