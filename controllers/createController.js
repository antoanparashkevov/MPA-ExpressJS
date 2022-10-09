const router = require('express').Router()
const {create} = require('../services/accomodationService')

const getHandler = (req,res)=>{
    res.render('pages/create',{
        title:'Create page'
    })
}
const postHandler = async (req,res)=>{
    const formData = req.body;
    try{
       const result =  await create(formData)
        res.status(201).redirect('/catalog/' + result.id)
    }catch (err){
        res.render('pages/create',{
            title: 'Request error',
            error: err.message
            
        })
    }
}

router.get('/',getHandler)
router.post('/',postHandler)

module.exports = router