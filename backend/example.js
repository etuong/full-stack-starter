/**
 * This is an example of a RESTful API using Express.js.
 * It allows users to get the list of students, get a specific student by ID, and add a new student.
 * The students are stored in an in-memory array.
 */
const express = require('express');
const app = express();

/**
 * Middleware to parse JSON requests.
 */
app.use(express.json());

/**
 * Array of students.
 */
const students = [{
  name: 'Ethan',
  email: 'etuong@cpp.edu',
  phoneNumber: '626-789-1495',
}, {
  name: 'Joseph',
  email: 'joseph@uw.edu',
  phoneNumber: '123-456-1495',
}, {
  name: 'Happy',
  email: 'happy@gmail.com',
  phoneNumber: '909-322-6432',
}];

/**
 * GET /
 * Returns a welcome message.
 */
app.get('/', (req, res) => {
  res.send('Class Roster');
});

/**
 * GET /students
 * Returns a list of students.
 */
app.get('/students', (req, res) => {
  res.json(students);
});

/**
 * GET /students/:id
 * Returns a specific student by ID.
 */
app.get('/students/:id', (req, res) => {
  const studentId = Number(req.params.id) - 1;
  res.json(students[studentId]);
});

/**
 * POST /students
 * Adds a new student to the list.
 */
app.post('/students', (req, res) => {
  students.push(req.body);
  res.json(students);
});

/**
 * Start the server.
 */
app.listen(3089);


