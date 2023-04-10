const {getById, deleteById} = require("../services/roomService");
const {parseError} = require("../util/parser");
const router = require('express').Router();

router.get('/:id/delete', async (req, res) => {
    const roomId = req.params.id;
    const room = await getById(roomId)

    if(!req.user || (room.owner.toString() !== req.user._id)) {
        return res.redirect('/auth/login')
    }
    
    res.render('pages/delete', {
        title: 'Delete accommodation',
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
        req.body._id = roomId
        res.render('pages/delete',{
            title: 'Delete error',
            error:  parseError(err),
            room: req.body,
        })
    }
})

module.exports = router;