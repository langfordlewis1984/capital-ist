import React from "react";

export default function Name() {
  function handleName() {}

  return (
    <div>
      <input type="text" placeholder="enter your name"></input>
      <button onClick={handleName}>Let's Go!</button>
    </div>
  );
}
