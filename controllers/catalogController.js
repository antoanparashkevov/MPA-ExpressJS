const router = require('express').Router()

const handler = (req,res)=>{
    res.render('pages/catalog',{
        title: 'Catalog page'
    })
}

router.get('/', handler)

module.exports = router