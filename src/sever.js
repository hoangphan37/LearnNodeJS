const express = require("express");
const path = require("path");
const app = express();
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");
const bodyBase = require("./config/bodyBase");

require("dotenv").config();

const port = process.env.PORT;
const host_name = process.env.HOST_NAME;

bodyBase(app, express);
configViewEngine(app, express);
app.use("/", webRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
