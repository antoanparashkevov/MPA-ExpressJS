const {createFacility, getAllFacilities, addFacilities} = require("../services/facilityService");
const {getById} = require("../services/roomService");
const {hasRole} = require("../middlewares/guards");
const router = require('express').Router()
const {body, validationResult} = require('express-validator');
const {parseError} = require("../util/parser");

router.get('/create',  hasRole('admin'), (req,res)=>{
   //show creation form
    res.render('pages/createFacility', {
        title: 'Create New Facility'
    })
})

router.post('/create', hasRole('admin'),
    body('label')
        .trim()
        .notEmpty().withMessage('Label is required!'),
    body('iconUrl')
        .trim(),
    async(req,res)=>{
    const formData = req.body;
    const {errors} = validationResult(req)
    try{
        
        if(errors.length > 0) {
            throw errors;
        }
        await createFacility(formData.label,formData.iconUrl);
        res.redirect('/catalog')
    }catch (error) {
        res.render('pages/createFacility', {
            title: 'Create New Facility',
            error: parseError(error),
            body: formData
        })
    }
})

router.get('/:roomId/decorateRoom', async (req, res)=> {
    const roomId = req.params.roomId;
    const room = await getById(roomId);
    
    if(!req.user || (room.owner.toString() !== req.user._id)){
        return res.redirect('/auth/login')
    }
    
    const facilities = await getAllFacilities();
    facilities.forEach(f=>{
        if((room.facilities || []).some(i=> i._id.toString() === f._id.toString())) {
            f.checked = true
        }
    })
    res.render('pages/decorate', {
        title: 'Add facility',
        room,
        facilities
    })
})

router.post('/:roomId/decorateRoom', async (req, res)=>{
    const roomId = req.params.roomId;
    const room = await getById(roomId)

    if(!req.user || (room.owner.toString() !== req.user._id)){
        return res.redirect('/auth/login')
    }
    
    const facilityIds = Object.keys(req.body)
    
    await addFacilities(roomId, facilityIds)
    
    res.redirect(`/catalog/${roomId}`)
})

module.exports = router;