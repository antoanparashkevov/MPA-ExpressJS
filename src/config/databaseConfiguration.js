const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost:27017/softuni-accomodations'

module.exports = async (app) =>{
    try{
        await mongoose.connect(process.env['DATABASE_CONNECTION'], {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Database connected')
    } catch(error) {
        console.log('It has an error from MongoDB client')
        console.error(error.message)
        process.exit(1)
    }
}