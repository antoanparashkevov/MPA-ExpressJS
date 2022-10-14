const Room = require('../models/Room')

const getAll =  () => {
      return Room.find({}).lean()
}

const getById = async (id)=>{
    await Room.findById(id)
}

module.exports = {
    getAll,
    getById
}