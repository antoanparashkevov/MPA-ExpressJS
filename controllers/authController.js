const router = require('express').Router();
const jwt = require('jsonwebtoken')

const secret = 'asdfghj'

router.get('/obtain',(req,res)=>{
    const payload = { 
        _id:'123123423',
        name: 'John',
        roles: ['user']
    }
   const token =  jwt.sign(payload,secret)
    res.cookie('jwt',token)
    res.send('Json Web Token was created successfully!')
})


router.get('/validate', (req,res)=>{
    const token = req.cookies.jwt
    if(token) {
        try {
           const data =  jwt.verify(token,secret)
            res.json(data)  
        } catch (err) {
            res.cookie('jwt', '', {maxAge: 0})
            res.redirect('/login')  
        }
    } else { 
        res.send('Missing token')
    }
})

module.exports = router;