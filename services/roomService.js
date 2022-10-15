const Room = require('../models/Room')

const getAll =  () => {
      return Room.find({}).lean()
}

const getById =  (id)=>{
    return Room.findById(id).lean()
}

module.exports = {
    getAll,
    getById
}