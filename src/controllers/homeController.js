const connection = require('../config/database')


const getHomePage =(req, res)=>{
    return res.render('home.ejs');

}
const getPage = (req, res)=>{
    res.render('../views/sample.ejs')
}
module.exports={
    getHomePage,
    getPage
}