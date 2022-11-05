module.exports = () => (req,res,next) => {
    if(req.user !== undefined) {
        res.locals.hasUser = true;
        res.locals.username = req.user.username[0].toUpperCase() + req.user.username.slice(1)
    }
    next();
}