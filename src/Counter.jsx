import React, { useState } from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

const Counter = () => {
  // Using useState hooks for defining state
  const [counter1, setCounter1] = useState(0);
  // const [del1, setDel1] = useState(false);
  // const [del2, setDel2] = useState(false);

  const increase1 = () => {
    setCounter1(counter1 + 1);
  };
  const [counter2, setCounter2] = useState(0);

  const increase2 = () => {
    setCounter2(counter2 + 1);
  };

  return (
    <div className="container">
      <div>
        <Counter1 value={counter1} onClick={increase1} />
      </div>

      {/* {del1 ? null : <Counter1 value={counter1} onClick={increase1} />}
      <button onClick={() => setDel1(false)}>Delete Counter1</button> */}
      <div>
        <Counter2 value={counter2} onClick={increase2} />
      </div>
      {/* {del2 ? null : <Counter2 value={counter2} onClick={increase2} />}
      <button onClick={() => setDel2(false)}>Delete Counter2</button> */}
    </div>
  );
};

export default Counter;
