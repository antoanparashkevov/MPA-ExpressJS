const {getAll} = require("../services/accomodationService");
const router = require('express').Router()

const handler = (req,res)=>{
    const rooms = getAll()
    res.render('pages/catalog',{
        title: 'Catalog page',
        rooms
    })
}

router.get('/', handler)

module.exports = router