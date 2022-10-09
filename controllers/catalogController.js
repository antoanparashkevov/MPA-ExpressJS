const {getAll, getById} = require("../services/accomodationService");
const router = require('express').Router()

router.get('/', (req,res)=>{
    const objQueries = {
        name: req.query.name || '',
        location: req.query.location || '',
        fromPrice:+req.query.fromPrice || 1,
        toPrice: +req.query.toPrice || 1000
        
    }
    const rooms = getAll(objQueries);
    
    res.render('pages/catalog',{
        title: 'Catalog page',
        rooms,
        name:objQueries.name,
        location:objQueries.location,
        fromPrice:objQueries.fromPrice,
        toPrice:objQueries.toPrice,
    })
})

router.get('/:id',(req,res)=>{
    const id = req.params.id;
    const room = getById(id);
    if(room){
        res.render('pages/details',{
            title: 'Details for ' + room.name,
            room
        })
    }else {
        res.render('pages/pageNotFound',{
            title: `Code ${id} not found`,
            id
        })
    }
   
})

module.exports = router