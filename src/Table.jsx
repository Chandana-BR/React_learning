import React, { useState } from "react";
import StudentForm from "./form";

function TableData() {
  const [studentData, setStudentData] = useState([]);
  const handleDelete = (index, e) => {
    setStudentData(studentData.filter((v, i) => i !== index));
  };

  const tableRows = studentData.map((info, index) => {
    return (
      <tr key={info.id}>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.city}</td>
        <td>
          <button onClick={(e) => handleDelete(index, e)}>Delete</button>
        </td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalStudents = studentData.length;
    data.id = totalStudents + 1;
    const updatedStudentData = [...studentData];
    updatedStudentData.push(data);
    setStudentData(updatedStudentData);
  };

  return (
    <div>
      <StudentForm func={addRows} />
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default TableData;
