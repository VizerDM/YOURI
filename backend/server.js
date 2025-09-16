import express from "express";
import mysql from "mysql2";
import cors from "cors";
import dotenv from "dotenv";
// Read .env info
dotenv.config();

//Open the server
const app = express();
app.use(cors()); //user cross origin requests
app.use(express.json()); // auto parse json in requests

// create the connection with mysql client
const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//Connnecting wla man3ref
db.connect((err) => {
  if (err) {
    console.error("Error opening connection : ", err);
  } else {
    console.log("Connection succesful");
  }
});

app.get("/app/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    //run sql cmd from the db
    if (err) return res.status(500).json(err);
    res.json(results); // return it to thefront end in json form to get parsed later wa9ila
  });
});

app.listen(5000, () => console.log("Server kaysme3 fport 5000 "));
