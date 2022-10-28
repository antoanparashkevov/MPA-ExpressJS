const {createFacility, getAllFacilities, addFacilities} = require("../services/facilityService");
const {getById} = require("../services/roomService");
const {hasRole} = require("../middlewares/guards");
const router = require('express').Router()

router.get('/create',  hasRole('admin'), (req,res)=>{
   //show creation form
    res.render('pages/createFacility', {
        title: 'Create New Facility'
    })
})

router.post('/create', hasRole('admin'), async(req,res)=>{
    const formData = req.body
    try{
        await createFacility(formData.label,formData.iconUrl);
        res.redirect('/catalog')
    }catch (error) {
        throw new Error(error.message)
    }
})

router.get('/:roomId/decorateRoom', async (req, res)=> {
    const roomId = req.params.roomId;
    const room = await getById(roomId);
    
    if(!req.user || (room.owner !== req.user._id)){
        return res.redirect('/auth/login')
    }
    
    const facilities = await getAllFacilities();
    facilities.forEach(f=>{
        if((room.facilities || []).some(id=> id.toString() === f._id.toString())) {
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

    if(!req.user || (room.owner !== req.user._id)){
        return res.redirect('/auth/login')
    }
    
    const facilityIds = Object.keys(req.body)
    
    await addFacilities(roomId, facilityIds)
    
    res.redirect(`/facility/${roomId}/decorateRoom`)
})

module.exports = router;