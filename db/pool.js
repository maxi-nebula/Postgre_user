const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "postgres",
  database: "top_users",
  password: "101ei140",
  port: 5432,
});
