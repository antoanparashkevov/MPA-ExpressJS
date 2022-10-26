const jwt = require('jsonwebtoken')


module.exports = (secret) => (req,res,next) => {
    const token = req.cookies.jwt
    if(token) {
        try {
            const data =  jwt.verify(token,secret)
            req.user = data
            res.json(data)
        } catch (err) {
            res.cookie('jwt', '', {maxAge: 0})
            return res.redirect('/login')
        }
    }
    
    next();
}