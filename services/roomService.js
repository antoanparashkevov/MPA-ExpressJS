const Room = require('../models/Room')

const getAll =  () => {
      return Room.find({}).lean()
}

const getById =  (id)=>{
    //lean extracts only the values, not methods or virtual properties just for security (express-handlebars error)
    return Room.findById(id).lean()
}
const create =  (data,ownerId) => {
    const room = {
        name: data.name,
        description: data.desc,
        location: data.location,
        price: data.price,
        beds: data.beds,
        imgURL: data.imgURL,
        owner: ownerId
    }
    
    const missing = Object.entries(room).filter(([k,v])=> !v);
    
    if(missing.length > 0) {
        throw new Error(missing.map(m=>`${m[0]} is required!`).join('\n'));
    }


    return Room.create(room);
}

const update = async (roomId, roomData) => {
    const missing = Object.entries(roomData).filter(([k,v])=> !v);

    if(missing.length > 0) {
        throw new Error(missing.map(m=>`${m[0]} is required!`).join('\n'));
    }
    
    const room = await Room.findById(roomId)
    
    room.name = roomData.name;
    room.description = roomData.desc;
    room.location = roomData.location;
    room.price = roomData.price;
    room.beds = roomData.beds;
    room.imgURL =roomData.imgURL;

    
    await room.save();
        
}

async function deleteById(roomId) {
    return Room.findByIdAndDelete(roomId);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}