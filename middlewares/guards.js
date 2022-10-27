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


module.exports = {
    isUser,
    isGuest
}