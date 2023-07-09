const mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Defaultpw",
  database: "tut",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("database connected!");
});

module.exports = con;
