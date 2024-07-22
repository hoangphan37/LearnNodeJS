const express = require("express");
const path = require("path");
const app = express();

require("dotenv").config();

const port = process.env.PORT;
const host_name = process.env.HOST_NAME;

app.get("/", (req, res) => {
  res.render("sample.ejs");
});

app.use(express.static("public"));

app.set("views", "src/views");
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
