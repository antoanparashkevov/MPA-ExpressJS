const express = require('express')
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});
//imports...
const titleMiddleware = require('./middlewares/title')
const homeController = require('./controllers/homeController')
const catalogController = require('./controllers/catalogController')
const createController = require('./controllers/createController')
const aboutController = require('./controllers/aboutController')
const defaultController = require('./controllers/defaultController')

const port = 8000;
const app = express();

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

//global middlewares
app.use(express.urlencoded({extended:false}))
app.use('/static',express.static('static'))
app.use(titleMiddleware('Accommodations'))

app.use(homeController);
app.use('/catalog',catalogController);
app.use('/create',createController);
app.use('/about',aboutController);
app.all('/*',defaultController)

app.listen(port,()=>console.log(`App listening on port ${port}...`))