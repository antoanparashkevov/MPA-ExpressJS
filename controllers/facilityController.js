const router = require('express').Router()

router.get('/create',  (req,res)=>{
   //show creation form
    res.render('pages/createFacility', {
        title: 'Create New Facility'
    })
})

router.post('/create', async(req,res)=>{
    console.log(req.body)
})

module.exports = router;