import React, { useState, useEffect } from "react";
import Child from "./Child";
import ChildWithoutMemo from "./ChildWithoutMemo";
import "./App.css";
import Header from "./Header";
import Comments from "./Comments";

const Parent = ({ user }) => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  const [displayMemo, setDisplayMemo] = useState(false);
  const list = [1, 2, 3];

  useEffect(() => {
    console.log("user", user);
  }, []);

  const handleCounterClick = () => {
    setCounter(counter + 1);
  };

  const onInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSwitch = () => {
    setDisplayMemo(!displayMemo);
  };
  return (
    <div className="App">
      <Header user={user} />
      <div className="parent">
        <button onClick={handleSwitch} title="parent_button" className="button">
          {displayMemo ? "switch to unmemo" : "switch to memo"}
        </button>
        <h1>Hello from Parent: {counter}</h1>
        <div>
          <button onClick={handleCounterClick}>+1</button>
          <input type="text" onChange={onInputChange} title="parent_input" className="input"/>
        </div>
      </div>
      {displayMemo ? (
        <Child counter={counter} list={list} />
      ) : (
        <ChildWithoutMemo counter={counter} list={list} />
      )}
      <Comments user={user} />
    </div>
  );
};

export default Parent;
