//imports...
const homeController = require('../controllers/homeController')
const catalogController = require('../controllers/catalogController')
const createController = require('../controllers/createController')
const aboutController = require('../controllers/aboutController')
const facilityController = require('../controllers/facilityController')
const defaultController = require('../controllers/defaultController')
const authController = require('../controllers/authController')
module.exports = (app) =>{
    app.use(homeController);
    app.use('/catalog',catalogController);
    app.use('/create',createController);
    app.use('/about',aboutController);
    app.use('/facility',facilityController);
    app.use('/auth',authController)
    app.all('/*',defaultController)
}
