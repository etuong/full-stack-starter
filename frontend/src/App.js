import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    // Change this to your backend server REST endpoint e.g localhost
    const url = 'https://roster-backend-m4bn.onrender.com/students';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setStudentList(data);
      });
  }, []);

  return (
    <div className="App">
      <p>Roster</p>
      {studentList.map((student, index) => (
        <p key={index}>{student.name} has grade {student.grade}</p>
      ))}
    </div>
  );
}

export default App;

