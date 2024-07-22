const express = require('express');
const { getHomePage, getPage } = require('../controllers/homeController');
const router = express.Router();

router.get("/", getPage);
router.get("/test",getHomePage);
module.exports = router;