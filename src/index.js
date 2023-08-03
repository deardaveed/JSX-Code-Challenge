//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const name = "David";
const age = 24;

//It should display a h1 heading.
ReactDOM.render(
  <div>
    <h1>JSX Code Challenge</h1>
    <ul>
      <li>1 list item</li>
      <li>2 list item</li>
      <li>3 list item</li>
      <li>
        My name is {name} and I am {age}
      </li>
      <li>My name is {`{name} and I am {age}`}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
