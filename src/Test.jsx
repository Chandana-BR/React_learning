import React, { useState, memo } from "react";

const TestAdding = () => {
  let [number1, setNumber1] = useState(0);
  let [number2, setNumber2] = useState(0);
  let [res, setRes] = useState(0);

  let Add = () => {
    setRes(Number(number1) + Number(number2));
  };

  let Sub = () => {
    setRes(Number(number1) - Number(number2));
  };

  let Multiply = () => {
    setRes(Number(number1) * Number(number2));
  };

  let Divide = () => {
    setRes(Number(number1) / Number(number2));
  };

  return (
    <div>
      <h1>TestAdding</h1>

      <input
        id="val1"
        value={number1}
        onChange={(event) => {
          setNumber1(event.target.value);
        }}
        placeholder="enter 1st number.."
      />
      <input
        id="val2"
        value={number2}
        onChange={(event) => {
          setNumber2(event.target.value);
        }}
        placeholder="enter 2st number.."
      />

      <h3>{res}</h3>
      <button onClick={Add}>Add +</button>
      <button onClick={Sub}>Subtract-</button>
      <button onClick={Multiply}>Multiply *</button>
      <button onClick={Divide}>Divide /</button>
    </div>
  );
};

export default memo(TestAdding);
