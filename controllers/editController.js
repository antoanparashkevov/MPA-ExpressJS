const {getById, update, create} = require("../services/roomService");
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
    console.log('formData', roomData)
    const room = await getById(roomId)
    console.log('room',room)
    if(!req.user || (room.owner.toString() !== req.user._id)) {
        return res.redirect('/auth/login')
    }
    
    try{
         await update(roomId, roomData)
        res.redirect('/catalog/' + roomId)
    }catch (err){
        //TODO error conditional statement in the view.
        req.body._id = roomId
        console.log(err.message.split('\n'))
        res.render('pages/edit',{
            title: 'Update error',
            error: err.message.split('\n'),
            room: {
                ...req.body,
                imgURL: req.body.imgUrl
            }
        })
    }
    
})


module.exports = router;