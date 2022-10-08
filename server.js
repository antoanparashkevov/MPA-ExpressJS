const express = require('express')
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});
const port = 8000;
const app = express();

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs')

//global middlewares
app.use(express.urlencoded({extended:false}))
app.use('/static',express.static('static'))

app.listen(port,()=>console.log(`App listening on port ${port}...`))