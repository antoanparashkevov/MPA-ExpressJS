const router = require('express').Router()
// const {create} = require('../services/accomodationService')
const {create} = require('../services/roomService')

const getHandler = (req,res)=>{
    res.render('pages/create',{
        title:'Create page'
    })
}
const postHandler = async (req,res)=>{
    const formData = req.body;
    try{
       const result =  await create(formData, req.user._id)
        res.redirect('/catalog/' + result._id)
    }catch (err){
        //TODO error conditional statement in the view.
        console.log(err.message.split('\n'))
        res.render('pages/create',{
            title: 'Request error',
            error: err.message.split('\n'),
        })
    }
}

router.get('/',getHandler)
router.post('/',postHandler)

module.exports = router