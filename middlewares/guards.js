function isUser() {
    return (req,res,next) => {
        if(req.user === undefined) {
            res.redirect('/auth/login')
        } else {
            next()
        }
    }
}

function isGuest() {
    return (req,res,next) => {
        if(req.user === undefined) {
            next()
        } else {
            res.redirect('/')
        }
    }
}

function hasRole(role) {
    return (req,res,next) => {
        if(req.user === undefined || req.user.roles.includes(role) === false) {
        res.redirect('/auth/login')
        } else {
           next();
        }
    }
}


module.exports = {
    isUser,
    isGuest,
    hasRole
}