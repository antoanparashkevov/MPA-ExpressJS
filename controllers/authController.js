const router = require('express').Router();
const {login, register} = require("../services/authService");

router.get('/login', (req,res)=>{
    res.render('pages/login', {
        title: 'Login page'
    })
})

router.post('/login',async (req,res)=>{
    const formData = req.body;
    const result = await login(formData.username, formData.password)//from the resolve function
    attachToken (req,res,result)
    res.redirect('/')
})

router.get('/register', (req,res)=>{
    res.render('pages/register', {
        title: 'Register page'
    })
})

router.post('/register',async (req,res)=>{
    const formData = req.body;
    const result = await register(formData.username, formData.register);
    attachToken (req,res,result)
    res.redirect('/')
})

function attachToken(req,res,data) {
    const token = req.signJwt(data);
    res.cookie('jwt',token, {maxAge: 14400000})//4 hours in milliseconds
}


module.exports = router;