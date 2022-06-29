import React from 'react'

const students = [
  {
    name: "Jane",
  },
  {
    name: "Steve",
  },
  {
    name: "Bill",
  },
  {
    name: "Willy",
  },
  {
    name: "Jeff",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      { students.map((students) => {
        return <li>{students.name}</li>
      })}
    </ul>
  )
}



export default AttendanceBook;