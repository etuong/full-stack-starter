const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2/promise');

app.use(express.json());
app.use(cors());

const databaseConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

async function executeQuery(sql) {
  const connection = await mysql.createConnection(databaseConfig);
  const [results] = await connection.execute(sql);
  return results;
}

app.get('/students', async (req, res) => {
  const students = await executeQuery('SELECT * FROM Roster');
  res.json(students);
});

app.post('/students', async (req, res) => {
  const { name, grade } = req.body;
  const sql = `INSERT INTO Roster (name, grade) VALUES ('${name}', '${grade}')`;
  const students = await executeQuery(sql);
  res.json(students);
});

app.listen(1234);

