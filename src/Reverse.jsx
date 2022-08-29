import React, { useState } from "react";

const Reverse = () => {
  const [data, setData] = useState("");
  // const [show, setShow] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setShow(data.split(" ").reverse().join(" "));
  // };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>{data}</p>
      {/* <button onClick={handleClick}>click</button> */}
      {/* <p>{show}</p> */}
      <p>{data.split(" ").reverse().join(" ")}</p>
    </div>
  );
};

export default Reverse;
