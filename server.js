const express = require('express')
const routesConfiguration = require('./config/routesConfiguration')
const expressConfiguration = require('./config/expressConfiguration')
const databaseConnection = require('./config/databaseConfiguration')
const port = 8000;

async function start(){
    const app = express();
    expressConfiguration(app)
    routesConfiguration(app)
    await databaseConnection(app);
    app.listen(port,()=>console.log(`App listening on port ${port}...`))
}

start();
