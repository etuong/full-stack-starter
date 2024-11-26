import React, { useState, useEffect, useRef } from 'react';

const styles = {
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    width: "200px",
  },
  button: {
    padding: "10px",
    fontSize: "18px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

function Roster() {
  const nameRef = useRef();
  const gradeRef = useRef();
  const [students, setStudents] = useState([]);

  // Change this to your backend server REST endpoint e.g localhost
  const baseUrl = "http://localhost:1234";

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch(`${baseUrl}/students`);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const grade = gradeRef.current.value.trim();

    if (!name || !grade) {
      alert("Both name and grade are required.");
      return;
    }

    try {
      const response = await fetch(`${baseUrl}/students`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, grade }),
      });

      if (!response.ok) {
        throw new Error("Failed to add student");
      }

      await fetchStudents();

      nameRef.current.value = "";
      gradeRef.current.value = "";
    } catch (error) {
      console.error(error);
      alert("There was an error adding the student.");
    }
  };

  return (
    <div className="App">
      <h1>Roster</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name} has grade {student.grade}</li>
        ))}
      </ul>

      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Student Name</label>
          <br />
          <input
            type="text"
            ref={nameRef}
            style={styles.input}
            placeholder="Enter student's name"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Grade</label>
          <br />
          <input
            type="text"
            ref={gradeRef}
            style={styles.input}
            placeholder="Enter grade"
          />
        </div>
        <button type="submit" style={styles.button}>
          Add Student
        </button>
      </form>
    </div>
  );
}

export default Roster;

