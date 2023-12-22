// Hello world

let heading = React.createElement(
  "h1",
  { name: "lucky", class: "heading" },
  "Hello World From React JS"
);

console.log(heading); // return object  react element

let root = document.getElementById("root");

const element = ReactDOM.createRoot(root);

element.render(heading);
