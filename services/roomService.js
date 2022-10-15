const Room = require('../models/Room')

const getAll =  () => {
      return Room.find({}).lean()
}

const getById =  (id)=>{
    //lean extracts only the values, not methods or virtual properties just for security (express-handlebars error)
    return Room.findById(id).lean()
}
const create = async (data) => {
    return await Room.create({
        name: data.name,
        description: data.desc,
        location: data.location,
        price: data.price,
        beds: data.beds,
        imgURL: data.img
    });
}

module.exports = {
    getAll,
    getById,
    create
}