The mission of this series is to take you from Zero to Hero in React. During this journey, you will learn everything by watching videos and then implement it by building projects.

# Inception 01:

- React is a library
- Inject React & use it
- This is the bueuty of library
- React can only work in navbar,sidebar
- React can work on what ever you make the root inside work react

- React work in small portion of app

- Write first react hello world program
- Using react CDN we have create 'hello world' program

- Introduction to fundamental tools and frameworks in web development

- Visual code setup,
- Hello world in HTML/JS,
  CDN, React Hello World

      <!DOCTYPE html>

      <html lang="en">

      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Inception 01</title>

      </head>

      <body>
        <div id="root">
          <!-- Hello World -->
        </div>

      <!-- Using JavaScript -->
      <!-- <script>
        let root = document.getElementById('root');

        let heading = document.createElement('h1');

        heading.innerHTML = 'Hello World From JavaScript';

        root.appendChild(heading);
      </script> -->


      <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
      <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
      <script>
        let heading = React.createElement('h1', {}, 'Hello World From React JS');


        let root = document.getElementById('root');

        const element = ReactDOM.createRoot(root);

        element.render(heading);

      </script>

    </body>

    </html>

- This is the Shortest Program of React JS (use CDN inside index.html)
- It takes minimum effort to just put it inside our code

- React will overwrite everything inside root.

- This object is used for passing props (to give parameters).

      ('h1',{name:'lucky','Hello World From React JS'});

      <h1 name="lucky">Hello World From React JS</h1>

- props are children + attributes that we pass inside element.

- Most Costly operation is when DOM needs to be changed or updating (DOM tree gets changed)

- DOM Tree is getting changed (removing node or adding node) , it is very expensive & react solves it very effectively

- Using JavaScript we changed DOM (Manipulating DOM using js/react)

- ReactElement (Object)=> HTML (Browser Understands)

- create nested structure like this :

      const parent = React.createElement(
        "div",
        { className: "parent" },
        React.createElement(
          "div",
          { className: "child" },
          React.createElement(
            "h1",
            { name: "lucky", className: "heading" },
            "Hello World From React JS"
          )
        )
      );

- Use className not class in React

- React is working inside div id root

      <h1>Hello Top of Root</h1>
      <div id="root">
        Hello World
      </div>


      <h2>Hello Below Root</h2>

# Igniting our App 02:

- Dive into essential package managers and module bundlers for React projects.

- npm,parcel

- Node modules

- React app file structure

- Use parcel in our app

      npm i -D parcel
