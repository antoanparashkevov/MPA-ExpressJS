const {createFacility} = require("../services/facilityService");
const router = require('express').Router()

router.get('/create',  (req,res)=>{
   //show creation form
    res.render('pages/createFacility', {
        title: 'Create New Facility'
    })
})

router.post('/create', async(req,res)=>{
    const formData = req.body
    try{
        await createFacility(formData.label,formData.icon);
        res.status(201).redirect('/catalog')
    }catch (error) {
        throw new Error(error.message)
    }
})

module.exports = router;