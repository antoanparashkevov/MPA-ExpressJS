const hbs = require('express-handlebars').create({
    extname: '.hbs'
});

const secret = 'asdfghj'

const express = require('express')
const cookieParser = require('cookie-parser')
const titleMiddleware = require('../middlewares/title')
const auth  = require('../middlewares/auth')
const userNav = require('../middlewares/userNav')

module.exports = (app)=>{
    app.engine('.hbs', hbs.engine)
    app.set('view engine', '.hbs')
    app.use(cookieParser())
    app.use(auth(secret))
    app.use(userNav)

//global middlewares
    app.use(express.urlencoded({extended:true}))
    app.use('/static',express.static('static'))
    app.use(titleMiddleware('Accommodations'))
} 
