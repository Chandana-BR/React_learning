// {app component}
// import Form from "./Form";
// import "./styles.css";
// import Table from "./Table";

// export default function App() {
// return (
// <div className="App">
// {/* <Form /> */}
// <Table />
// </div>
// );
// }

// {form component}
// import React, { useState } from "react";

// function Form(props) {
// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [country, setCountry] = useState("");
// const [dob, setDob] = useState("");

// function handleSubmit(e) {
// e.preventDefault();
// const val = { firstName, lastName, country, dob };
// props.func(val);
// setFirstName("");
// setLastName("");
// }
// return (
// <>
// <form>
// <label>First Name</label>
// <input
// value={firstName}
// onChange={(e) => setFirstName(e.target.value)}
// />
// <br />
// <label>Last Name</label>
// <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
// <br />
// <label>Country</label>
// <select value={country} onClick={(e)=>{setCountry(e.target.value);}}>
// <option value="India">India</option>
// <option value="Australia">Australia</option>
// <option value="Turkey">Turkey</option>
// </select>
// <br />
// <label>Date Of Birth</label>
// <input type="date" onChange={(e) => setDob(e.target.value)} />
// <br />
// <button onClick={handleSubmit}>Submit</button>
// </form>
// </>
// );
// }
// export default Form;

// import React, { useState } from "react";
// import Form from "./Form";

// function Table() {
//   const [user, setUser] = useState([]);
//   const tableRows = user.map((info) => {
//     return (
//       <tr key={info.id}>
//         <td>{info.firstName}</td>
//         <td>{info.lastName}</td>
//         <td>{info.country}</td>
//         <td>{info.dob}</td>
//       </tr>
//     );
//   });

//   const addForm = (data) => {
//     const total = user.length;
//     data.id = total + 1;
//     const update = [...user];
//     update.push(data);
//     setUser(update);
//   };

//   return (
//     <div>
//       <Form func={addForm} />
//       <table>
//         <thead>
//           <tr>
//             <td>First Name</td>
//             <td>Last Name</td>
//             <td>Country</td>
//             <td>DOB</td>
//           </tr>
//         </thead>
//         <tbody>{tableRows}</tbody>
//       </table>
//     </div>
//   );
// }
// export default Table;
