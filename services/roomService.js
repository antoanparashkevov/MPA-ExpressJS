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

module.exports = {
    getAll,
    getById,
    create
}