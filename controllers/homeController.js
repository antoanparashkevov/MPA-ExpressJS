const router = require('express').Router();

const handler = (req,res) =>{
    res.render('pages/home',{
        title:'Home page'
    })
}

router.get('/', handler)


module.exports = router