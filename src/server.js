const express = require('express');
const dotenv = require('dotenv');

//configurations
const databaseConnection = require('./config/databaseConfiguration');
const expressConfiguration = require('./config/expressConfiguration');
const routesConfiguration = require('./config/routesConfiguration');

const app = express();

dotenv.config();

expressConfiguration(app)
routesConfiguration(app)

databaseConnection(app).then( () => {
    app.listen(process.env['PORT'],() => console.log(`App listening on port ${process.env['PORT']}...`))
});



