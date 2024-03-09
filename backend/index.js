const express = require("express");
const app = express();
app.use(express.json());
var cors = require('cors')
app.use(cors())

const config = {
  db: {
    host: "sql3.freemysqlhosting.net",
    user: "sql3688793",
    password: "h2B8llCsvf",
    database: "sql3688793"
  }
}

const mysql = require("mysql2/promise");
async function query(sql) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.query(sql);
  return results;
}

app.get("/students", async (req,res)=> {
  const students = await query("select * from Roster")
  res.json(students);
})

app.post("/new-student", async (req, res) => {
  const {name, grade} = req.body;
  const sql = `insert into Roster(name, grade) values("${name}", "${grade}")`;
  const students = await query(sql)
  res.json(students);
})

const users = [
  {
    "name": "Ethan",
    "email": "etuong@uw.edu",
    "number": "123-456-7890",
  },
  {
    "name": "Happy",
    "email": "happy@uw.edu",
    "number": "987-744-1234",
  }
]
app.get("/", (req, res) => {
  res.send("Ethan is such a nice professor");
})

app.get("/users", (req, res) => {
  res.json(users);
})

app.get("/users/:id", (req, res) => {
  res.json(users[Number(req.params.id) - 1]);
})

app.post("/whatever", (req, res) => {
  users.push(req.body);
  res.json(users);
})

app.listen(1234);

