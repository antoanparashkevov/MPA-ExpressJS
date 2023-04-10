const express = require('express')
const hbs = require('express-handlebars').create({
    extname: '.hbs',
    layoutsDir: 'src/views/layouts'
});

const cookieParser = require('cookie-parser')
const titleMiddleware = require('../middlewares/title')
const auth  = require('../middlewares/auth')
const userNav = require('../middlewares/userNav')

module.exports = (app)=>{
    
    app.engine('.hbs', hbs.engine)
    app.set('view engine', '.hbs')
    app.set('views', './src/views');
    
    app.use(express.urlencoded({extended:true}))//adds body property to the request when we have a form data and we want to handle it
    app.use('/static', express.static('static'))
    
    //global middlewares
    app.use(cookieParser())
    app.use(auth(process.env['JWT_SECRET']))
    app.use(userNav())
    app.use(titleMiddleware('Accommodations'))
} 
