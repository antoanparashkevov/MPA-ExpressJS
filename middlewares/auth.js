const jwt = require('jsonwebtoken')


module.exports = (secret) => (req,res,next) => {
    const token = req.cookies.jwt
    if(token) {
        try {
            req.user = jwt.verify(token, secret);
        } catch (err) {
            res.clearCookie('jwt')
            return res.redirect('/auth/login')
        }
    }
    
    req.signJwt = (data) => jwt.sign(data,secret, {
        expiresIn: '1h'
    })
    
    next();
}