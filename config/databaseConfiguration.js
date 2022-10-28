const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost:27017/softuni-accomodations'

module.exports = async (app) =>{
    try{
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Database connected')
    } catch(error) {
        console.error(error.message)
        process.exit(1)
    }
    
}