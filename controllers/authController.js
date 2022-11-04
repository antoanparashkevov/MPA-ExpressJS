const router = require('express').Router();
const {login, register} = require("../services/authService");
const { body, validationResult } = require('express-validator');

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

router.post('/register',
    body('username')
        .trim()
        .notEmpty()
        .withMessage('Username is required').bail()
        .isAlphanumeric()
        .withMessage('Username may contain only english letters and numbers!')
        .isLength({min: 3})
        .withMessage('Username must be at least 3 characters long'),
    body('password')
        .trim()
        .isLength({min: 3})
        .withMessage('Passowrd must be at least 3 characters long'),
    body('repass')
        .trim()
        .custom(async (value, {req}) =>{
            if(value !== req.body.password) {
                throw new Error('Passwords don\t match!')
            }
        }),
    async (req,res)=>{
    try {
        const {errors} =  validationResult(req);
        if(errors.length > 0) {
            throw errors;
        }
        const formData = req.body;
        const result = await register(formData.username, formData.password);
        attachToken(req, res, result)
        res.redirect('/')
    }catch (error) {
        const fields = Object.fromEntries(error.map(e=>[e.param, e.param]))
        fields.oldValueName = req.body.username;
        res.render('pages/register', {
            title: 'Register page',
            error,
            fields
        })
    }
})

router.get('/logout', (req,res)=>{
    res.clearCookie('jwt');
    return res.redirect('/')
})

function attachToken(req,res,data) {
    const token = req.signJwt(data);
    res.cookie('jwt',token, {maxAge: 14400000})//4 hours in milliseconds
}


module.exports = router;