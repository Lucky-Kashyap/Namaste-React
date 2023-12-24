import React from "react";

import ReactDOM from "react-dom/client";

/* <div class='parent'>
<div class='child'>
  
  <h1>HEading</h1>
  </div>
  </div> */

// let heading = React.createElement(
//   "h1",
//   { name: "lucky", class: "heading" },
//   "Hello World From React JS"
// );

const parent = React.createElement(
  "div",
  { className: "parent" },
  React.createElement("div", { className: "child" }, [
    React.createElement(
      "h1",
      { name: "lucky", className: "heading" },
      "Hello World From React JS"
    ),
    React.createElement(
      "h2",
      { name: "lucky", className: "heading" },
      "Hello World Sibling Element"
    ),
  ])
);

// let heading = React.createElement(
//   "h1",
//   { name: "lucky", class: "heading" },
//   "Hello World From React JS"
// );

// console.log(heading); // return object  react element

let root = document.getElementById("root");

const element = ReactDOM.createRoot(root);

// element.render(heading);

element.render(parent);
