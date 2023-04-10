const mongoose = require('mongoose')

module.exports = async (app) =>{
    try{
        await mongoose.connect(process.env['DATABASE_CONNECTION'], {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Database connected successfully')
    } catch(error) {
        console.log('It has an error from MongoDB client')
        console.error(error.message)
        process.exit(1)
    }
}