const getHomePage =(req, res)=>{
    res.render('../views/test.ejs');
}
const getPage = (req, res)=>{
    res.render('../views/sample.ejs')
}
module.exports={
    getHomePage,
    getPage
}