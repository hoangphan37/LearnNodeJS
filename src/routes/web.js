const express = require('express');
const {
  getHomePage,
  getPage,
  postCreatUser,
  GetCreatUser,
  GetUpdatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);
router.get("/home",getHomePage);
router.post("/creat-user", postCreatUser);
router.get("/creat", GetCreatUser);
router.get("/update", GetUpdatePage);
module.exports = router;