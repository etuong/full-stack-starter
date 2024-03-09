import './App.css';
import React from "react";

function App() {
  const [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    fetch("https://roster-backend-m4bn.onrender.com/students")
      .then(res => res.json())
      .then(data => {
        setStudents(data)
        console.log(data);
      })
  }, [])

  return (
    <div className="App">
      <p>EThan</p>
      {
        students && students.map((student, index) =>
          <p key={index}>{student.name} has grade {student.grade}</p>
        )
      }
    </div>
  );
}

export default App;
