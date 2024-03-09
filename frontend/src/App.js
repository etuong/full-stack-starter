import './App.css';
import React from "react";

function App() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    // Change this to your backend server REST endpoint e.g localhost
    const url = "https://roster-backend-m4bn.onrender.com/students";
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setStudents(data)
      })
  }, [])

  return (
    <div className="App">
      <p>Roster</p>
      {
        students && students.map((student, index) =>
          <p key={index}>{student.name} has grade {student.grade}</p>
        )
      }
    </div>
  );
}

export default App;
