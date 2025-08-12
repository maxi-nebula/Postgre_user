const db = require("../db/queries");

async function getUsernames(req, res) {
  console.log("inside all users router");
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

module.exports = getUsernames;
