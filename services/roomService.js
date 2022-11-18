const Room = require('../models/Room')

const getAll = (name,location,fromPrice,toPrice) => {
    return Room.find(
        {
            name: {$regex: name, $options: 'i'},
            location: { $regex: location, $options: 'i'},
            price: {$gte: fromPrice, $lte: toPrice},
        }).lean()
}

const getById = (id)=>{
    //lean extracts only the values, not methods or virtual properties just for security (express-handlebars error)
    return Room.findById(id).populate('facilities', 'iconUrl label').lean();
}

const create = async (data,ownerId) => {
    const room = {
        name: data.name,
        description: data.description,
        location: data.location,
        price: Number(data.price),
        beds: Number(data.beds),
        imgURL: data.imgUrl,
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
    room.description = roomData.description;
    room.location = roomData.location;
    room.price = Number(roomData.price);
    room.beds = Number(roomData.beds);
    room.imgURL = roomData.imgUrl;

    console.log('Updated room',room)
    await room.save();
        
}

const deleteById = async (roomId) => {
    return Room.findByIdAndDelete(roomId);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
}