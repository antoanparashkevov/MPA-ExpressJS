const router = require('express').Router();

router.get('/', (req,res) =>{
    res.render('pages/home',{
        title:'Home page'
    })
})


module.exports = router