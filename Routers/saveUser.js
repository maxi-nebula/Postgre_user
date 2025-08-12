const express = require("express");
const saveUserToDBRouter = express.Router();
const path = require("node:path");

saveUserToDBRouter.post("/", (req, res) => {
  console.log("insdie save user router");
  console.log(req.body.userName);
  res.send("saving the username");
});

module.exports = saveUserToDBRouter;
