const express = require("express");
const path = require("node:path");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

const getUsernamesRouter = require("./Routers/allUsers");
const newUserRouter = require("./Routers/newUser");
const saveUserToDBRouter = require("./Routers/saveUser");

app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.send("postgre app coming up");
});

app.use("/allUsers", getUsernamesRouter);
app.use("/newuser", newUserRouter);
app.use("/saveuser", saveUserToDBRouter);

app.listen(port, () => {
  console.log(`Actively listening to  ${port}`);
});
