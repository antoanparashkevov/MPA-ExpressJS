const {getById, update, create} = require("../services/roomService");
const {parseError} = require("../util/parser");
const router = require('express').Router()


router.get('/:id/edit', async (req, res) => {
    const roomId = req.params.id;
    const room = await getById(roomId);
    
    if(!req.user || (room.owner.toString() !== req.user._id)) {
        return res.redirect('/auth/login')    
    }
    
    res.render('pages/edit', {
        title: `Edit ${room.name}`,
        room
    })
})

router.post('/:id/edit', async (req,res) => {
    const roomId = req.params.id;
    const roomData = req.body;
    
    const room = await getById(roomId)
    if(!req.user || (room.owner.toString() !== req.user._id)) {
        return res.redirect('/auth/login')
    }
    
    try{
        await update(roomId, roomData)
        res.redirect('/catalog/' + roomId)
    }catch (err){
        req.body._id = roomId
        res.render('pages/edit',{
            title: 'Update page',
            error:  parseError(err),
            room: req.body
        })
    }
    
})


module.exports = router;