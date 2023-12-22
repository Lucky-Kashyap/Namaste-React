// Hello world

let heading = React.createElement(
  "h1",
  { name: "lucky" },
  "Hello World From React JS"
);

let root = document.getElementById("root");

const element = ReactDOM.createRoot(root);

element.render(heading);
