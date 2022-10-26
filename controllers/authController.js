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
    try {
        const formData = req.body;
        if(formData.username.trim() === '' && formData.password.trim() === '') {
            throw new Error('All fields are required!')
        }
        
        if(formData.password.trim() !== formData.repass.trim()) {
            throw new Error("Passwords don't match!")
        }
        const result = await register(formData.username.trim(), formData.password.trim());
        attachToken(req, res, result)
        res.redirect('/')
    }catch (err) {
        res.render('pages/register', {
            title: 'Register',
            error: err.message.split('\n')
        })
    }
})

function attachToken(req,res,data) {
    const token = req.signJwt(data);
    res.cookie('jwt',token, {maxAge: 14400000})//4 hours in milliseconds
}


module.exports = router;