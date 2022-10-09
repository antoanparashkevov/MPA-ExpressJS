const {getAll, getById, getByQuery} = require("../services/accomodationService");
const router = require('express').Router()

router.get('/', (req,res)=>{
    //declared but not defined -> undefined type
    let rooms;
    const searchParam = req.query.search;
    if(searchParam) {
        rooms = getByQuery(searchParam)
    }else{
        rooms = getAll()
    }
    res.render('pages/catalog',{
        title: 'Catalog page',
        rooms,
        search: searchParam ? searchParam : ''
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