const express = require("express");
const app = express();
const cors = require('cors')
const mysql = require("mysql2/promise");

app.use(express.json());
app.use(cors())

require('dotenv').config()
console.log(process.env)
const config = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }
}

async function query(sql) {
  const connection = await mysql.createConnection(config.db);
  const [results,] = await connection.query(sql);
  return results;
}

app.get("/students", async (req, res) => {
  const students = await query("select * from Roster")
  res.json(students);
})

app.post("/new-student", async (req, res) => {
  const { name, grade } = req.body;
  const sql = `insert into Roster(name, grade) values("${name}", "${grade}")`;
  const students = await query(sql)
  res.json(students);
})

app.listen(1234);