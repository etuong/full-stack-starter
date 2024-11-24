const express = require('express');
const app = express();

app.use(express.json());

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

app.get('/', (req, res) => {
  res.send('Class Roster');
});

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const studentId = Number(req.params.id) - 1;
  res.json(students[studentId]);
});

app.post('/students', (req, res) => {
  students.push(req.body);
  res.json(students);
});

app.listen(3089);

