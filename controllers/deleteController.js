const {getById, deleteById} = require("../services/roomService");
const router = require('express').Router();

router.get('/:id/delete', async (req, res) => {
    const roomId = req.params.id;
    const room = await getById(roomId)

    if(!req.user || (room.owner.toString() !== req.user._id)) {
        return res.redirect('/auth/login')
    }
    
    res.render('pages/delete', {
        title: 'Delete accomodation',
        room
    })
})

router.post('/:id/delete', async (req, res) => {
    const roomId = req.params.id;
    const room = await getById(roomId)

    if(!req.user || (room.owner.toString() !== req.user._id)) {
        return res.redirect('/auth/login')
    }

    try{
        await deleteById(roomId)
        res.redirect('/catalog')
    }catch (err){
        //TODO error conditional statement in the view.
        req.body._id = roomId
        console.log(err.message.split('\n'))
        res.render('pages/delete',{
            title: 'Delete error',
            error: err.message.split('\n'),
            room: {
                ...req.body,
                imgURL: req.body.imgUrl
            }
        })
    }
    
    res.render('pages/delete', {
        title: 'Delete accomodation',
        room
    })
})

module.exports = router;