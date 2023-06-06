const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "information_interview",
});

app.post("/register", (req, res) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const country = req.body.country;
  const Address = req.body.Address;
  const countrycode = req.body.countrycode;
  const phone = req.body.phone;
  db.query(
    "INSERT INTO users (login_email,username,login_password,Country,Country_code,Address,Phone,First_Name,Last_Name) VALUES(?,?,?,?,?,?,?,?,?,?)",
    [
      email,
      username,
      password,
      firstName,
      lastName,
      country,
      Address,
      countrycode,
      phone,
    ],
    (err, result) => {
      if (err) {
        return res.json("404:Something is Wrong");
      }
      return res.json(result);
    }
  );
});

app.listen(8081, () => {
  console.log("Connected...");
});
