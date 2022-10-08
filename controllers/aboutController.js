const router = require('express').Router();

const handler = (req,res)=>{
    res.render('pages/about')
}

router.get('/',handler)

module.exports = router