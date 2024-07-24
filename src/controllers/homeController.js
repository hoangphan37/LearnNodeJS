const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");
const path = require("path");
const getHomePage = async (req, res) => {
  let results = await getAllUsers();
  //    console.log(results);
  return res.render("home.ejs", { data: results, path: req });
};
const getPage = (req, res) => {
  res.render("../views/sample.ejs", { path: req });
};
const GetUpdatePage = (req, res) => {
  res.render("../views/edit.ejs", { path: req });
};
const GetCreatUser = (req, res) => {
  res.render("../views/create.ejs", { path: req });
};
const postCreatUser = async (req, res) => {
  let { email, name, city } = req.body;
  let [result, fielts] = await connection.query(
    "insert into User(email, name, city) values (?,?,?)",
    [email, name, city]
  );
  res.redirect("/"); 
};
module.exports = {
  getHomePage,
  getPage,
  postCreatUser,
  GetCreatUser,
  GetUpdatePage,
};
