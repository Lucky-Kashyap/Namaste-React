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

// JSX =>Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement (render)

// const jsxHeading = (
// <h1 className="heading" tabIndex="2">
//   Namaste React via JSX
// </h1>
// );

// React Components => functional & class based components

// Everything in react is a componenst

const Fn = () => "true";

// const title = <h1>Namaste REact Element</h1>;

// component composition use other component into a component

// we write js in {} any peice of JS code

const num = 45;

// const data = api.getData();   // bad api malicious data reurn
// JSX sanitizes tha data

const JsxHeading = () => {
  return (
    <div>
      <h1 className="heading" tabIndex="2">
        Namaste React via Functional Components
      </h1>
      <Fn />
      <h4>Use Element :-{title}</h4>
      <p>
        Write JS Code inside curly braces{" "}
        {/* {console.log("Hello writing JS Code...!!!")} */}
        {num}
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab voluptas
        porro odio laborum placeat quidem culpa magnam reiciendis quo debitis
        maiores, expedita, fugit animi? Laboriosam aperiam praesentium quasi
        dolorum iste.
      </p>
      <button>Click Me</button>
    </div>
  );
};

const title = (
  <h1>
    Namaste REact Element
    {num}
    {/* <JsxHeading /> */}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<JsxHeading />);
