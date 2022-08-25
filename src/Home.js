import React from "react";
const Home = () => {
  // let [count,setCount]=useState(0);
  // let Increase=()=>{
  //     setCount(++count);
  // }
  // let Decrease=()=>{
  //     setCount(--count);
  // }
  // let Reset=()=>{
  //     setCount(count=0);

  // const[name,setName]=useState("not yet clicked...")
  // let Reset=()=>{
  //     setName("you clicked...");
  // }
  let count = 0;
  let Increase = () => {
    count++;
    document.getElementById("value").textContent = count;
    document.getElementById("value").style.color = "green";
    document.getElementById("value").style.background = "red";
  };
  let Decrease = () => {
    count--;
    document.getElementById("value").textContent = count;
    document.getElementById("value").style.color = "red";
    document.getElementById("value").style.background = "green";
  };
  let Reset = () => {
    count = 0;
    document.getElementById("value").textContent = count;
    document.getElementById("value").style.color = "white";
    document.getElementById("value").style.background = "black";
  };
  return (
    <div className="Home">
      <h1>All Blogs</h1>
      <h2 className>Counter</h2>
      <h3 id="value">{count}</h3>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );

  // return(
  //     <div className="Home">
  //     <h1>All Blogs</h1>
  //     <h2>{name}</h2>
  //     <button onClick={Reset}>Reset</button>
  //     </div>
  // );
};

export default Home;
