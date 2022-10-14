//imports...
const homeController = require('../controllers/homeController')
const catalogController = require('../controllers/catalogController')
const createController = require('../controllers/createController')
const aboutController = require('../controllers/aboutController')
const defaultController = require('../controllers/defaultController')

module.exports = (app) =>{
    app.use(homeController);
    app.use('/catalog',catalogController);
    app.use('/create',createController);
    app.use('/about',aboutController);
    app.all('/*',defaultController)
}
