const express = require('express')
const routesConfiguration = require('./config/routesConfiguration')
const expressConfiguration = require('./config/expressConfiguration')
const port = 8000;

const app = express()

routesConfiguration(app)
expressConfiguration(app)

app.listen(port,()=>console.log(`App listening on port ${port}...`))