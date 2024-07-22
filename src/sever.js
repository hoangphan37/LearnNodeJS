const express = require("express");
const path = require("path");
const app = express();
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web');
require("dotenv").config();

const port = process.env.PORT;
const host_name = process.env.HOST_NAME;



//static file: clien chi xem dc thong tin trong file nay


configViewEngine(app, express);
app.use('/',webRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
