const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

app.use(express.json());
app.use(cors());
require('dotenv').config();

/**
 * MySQL database configuration.
 * @typedef {Object} DbConfig
 * @property {string} host - Database host.
 * @property {string} user - Database user.
 * @property {string} password - Database password.
 * @property {string} database - Database name.
 */
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

/**
 * Executes a SQL query.
 * @param {string} query - SQL query.
 * @param {Array<string>} params - Parameters to pass to the query.
 * @returns {Promise<Object>} - Query results.
 */
async function executeQuery(query, params = []) {
  const connection = await mysql.createConnection(dbConfig);
  const [results] = await connection.execute(query, params);
  await connection.end();
  return results;
}

/**
 * Handles GET /students.
 * @param {Express.Request} req - Request object.
 * @param {Express.Response} res - Response object.
 */
app.get('/students', async (req, res) => {
  try {
    const students = await executeQuery('SELECT * FROM Roster');
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

/**
 * Handles POST /students.
 * @param {Express.Request} req - Request object.
 * @param {Express.Response} res - Response object.
 */
app.post('/students', async (req, res) => {
  const { name, grade } = req.body;
  if (!name || !grade) {
    return res.status(400).json({ error: 'Name and grade are required' });
  }
  try {
    const insertQuery = `INSERT INTO Roster (name, grade) VALUES (?, ?)`;
    await executeQuery(insertQuery, [name, grade]);
    res.status(200).send("New Student Added!")
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(1234, () => {
  console.log('Server is running on port 1234');
});


