import React from "react";

import ReactDOM from "react-dom/client";

// React Element  => Object => when we render (HTML Element)

// const heading = React.createElement(
//   "h1",
//   { className: "heading" },
//   "Namaste React"
// );

// JSx
// JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel

// JSX => React.createElement => ReactElement - JS Object => HTMLElement (render)

const jsxHeading = (
  <h1 className="heading" tabIndex="2">
    Namaste React via JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHeading);
