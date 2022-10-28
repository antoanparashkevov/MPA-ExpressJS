const express = require('express')
const databaseConnection = require('./config/databaseConfiguration')
const expressConfiguration = require('./config/expressConfiguration')
const routesConfiguration = require('./config/routesConfiguration')
const port = 8000;

async function start(){
    const app = express();
    
    await databaseConnection(app);
    
    expressConfiguration(app)
    
    routesConfiguration(app)
    app.listen(port,()=>console.log(`App listening on port ${port}...`))
}

start();
