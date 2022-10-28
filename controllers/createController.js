const router = require('express').Router()
// const {create} = require('../services/accomodationService')
const {create} = require('../services/roomService')
const {hasRole} = require("../middlewares/guards");

router.get('/',hasRole('admin'), (req,res)=>{
    res.render('pages/create',{
        title:'Create page'
    })
})
router.post('/',hasRole('admin'), async (req,res)=>{
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
})

module.exports = router