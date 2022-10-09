const {getAll, getById} = require("../services/accomodationService");
const router = require('express').Router()

router.get('/', (req,res)=>{
    const rooms = getAll()
    res.render('pages/catalog',{
        title: 'Catalog page',
        rooms
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