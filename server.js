const express = require('express')
const routesConfiguration = require('./config/routesConfiguration')
const expressConfiguration = require('./config/expressConfiguration')
const databaseConnection = require('./config/databaseConfiguration')
const port = 8000;

const app = express()
start()
async function start(){
    routesConfiguration(app)
    expressConfiguration(app)
    await databaseConnection(app);
}

app.listen(port,()=>console.log(`App listening on port ${port}...`))