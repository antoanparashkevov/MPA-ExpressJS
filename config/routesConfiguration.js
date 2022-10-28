//imports...
const homeController = require('../controllers/homeController')
const catalogController = require('../controllers/catalogController')
const createController = require('../controllers/createController')
const aboutController = require('../controllers/aboutController')
const facilityController = require('../controllers/facilityController')
const defaultController = require('../controllers/defaultController')
const authController = require('../controllers/authController')
const editController = require('../controllers/editController')
const deleteController = require('../controllers/deleteController')
const {isUser, isGuest} = require("../middlewares/guards");
module.exports = (app) =>{
    app.use(homeController);
    app.use('/catalog',catalogController);
    app.use('/create',isUser(), createController);
    app.use('/room', isUser(), editController)
    app.use('/room', isUser(), deleteController)
    app.use('/about',aboutController);
    app.use('/facility', isUser(),facilityController);
    app.use('/auth',isGuest(), authController)
    app.all('/*',defaultController)
}
