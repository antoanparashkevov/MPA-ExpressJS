module.exports = (req,res)=>{
    res.status(404).render('pages/notFound',{
        title: 'Not found'
    })
}