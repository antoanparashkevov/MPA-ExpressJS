const hbs = require('express-handlebars').create({
    extname: '.hbs'
});
const express = require('express')
const cookieParser = require('cookie-parser')
const titleMiddleware = require('../middlewares/title')

module.exports = (app)=>{
    app.engine('.hbs', hbs.engine)
    app.set('view engine', '.hbs')
    app.use(cookieParser())

//global middlewares
    app.use(express.urlencoded({extended:true}))
    app.use('/static',express.static('static'))
    app.use(titleMiddleware('Accommodations'))
} 
