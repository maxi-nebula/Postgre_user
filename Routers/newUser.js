const express = require("express");
const newUserRouter = express.Router();
const path = require("node:path");

newUserRouter.get("/", (req, res) => {
  console.log("inside newuserrouter");
  res.sendFile(path.join(__dirname, "../views/form.html"));
});

module.exports = newUserRouter;
