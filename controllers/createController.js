const router = require('express').Router()

const getHandler = (req,res)=>{
    res.render('pages/create',{
        title:'Create page'
    })
}
const postHandler = (req,res)=>{
    console.log('Handling POST request...')
    const formData = req.body;
    console.log(formData)
    res.status(201).redirect('/catalog')
}

router.get('/',getHandler)
router.post('/',postHandler)

module.exports = router