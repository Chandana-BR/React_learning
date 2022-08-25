// import React, { useState } from "react";

// function FormData(props) {
//   const [name, setName] = useState("");
//   const [city, setCity] = useState("");

//   const transferValue = (event) => {
//     event.preventDefault();
//     const val = {
//       name,
//       city,
//     };
//     props.func(val);
//     clearState();
//   };

//   const clearState = () => {
//     setName("");
//     setCity("");
//   };

//   return (
//     <div>
//       <form>
//         <label>Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//         />
//         <label>City</label>
//         <input
//           type="text"
//           value={city}
//           onChange={(event) => {
//             setCity(event.target.value);
//           }}
//         />
//         <button onClick={transferValue}>submit</button>
//       </form>
//     </div>
//   );
// }

// export default FormData;

import React, { useState } from "react";
import axios from "axios";

function StudentForm(props) {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const changeCity = (event) => {
    setCity(event.target.value);
  };

  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      name,
      city,
    };
    props.func(val);
    console.log(val);
    axios.post("http://localhost:3000/users", { name, city });
    setName("");
    setCity("");
  };

  return (
    <div>
      <form>
        <br />
        <label>Name</label>
        <input type="text" value={name} onChange={changeName} required />
        <br />
        <label>City</label>
        <input type="text" value={city} onChange={changeCity} required />
        <br />
        <button onClick={transferValue} required>
          Submit
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
