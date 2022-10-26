const router = require('express').Router();
const {login} = require("../services/authService");

router.get('/login', (req,res)=>{
    res.render('pages/login', {
        title: 'Login page'
    })
})

router.post('/login',async (req,res)=>{
    const formData = req.body;
    const result = await login(formData.username, formData.password)//from the resolve function
    const token = req.signJwt(result)
    res.cookie('jwt',token)
    res.redirect('/')
})

router.get('/register', (req,res)=>{
    res.render('pages/register', {
        title: 'Register page'
    })
})

router.post('/register',async (req,res)=>{
    //to do 
})


module.exports = router;