const hbs = require('express-handlebars').create({
    extname: '.hbs'
});
const express = require('express')
const titleMiddleware = require('../middlewares/title')

module.exports = (app)=>{
    app.engine('.hbs', hbs.engine)
    app.set('view engine', '.hbs')

//global middlewares
    app.use(express.urlencoded({extended:false}))
    app.use('/static',express.static('static'))
    app.use(titleMiddleware('Accommodations'))
} 
