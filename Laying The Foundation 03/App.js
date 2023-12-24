import React from "react";

import ReactDOM from "react-dom/client";

// React Element  => Object => when we render (HTML Element)

const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Namaste React"
);

// JSx

const jsxHeading = <h1 className="heading">Namaste React via JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHeading);
