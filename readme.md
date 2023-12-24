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

- We can create our own create-react-app.

  - create-react-app uses webpack & babel

- we configure npm

      npm init

  - It will create package.json file
  - It maintains version of app

- Use parcel in our app

      npm i -D parcel

- It will create a production ready code for application

- Understanding about package.json & package-lock.json deeply

- It will create lot of things that parcel need

- create package-lock.json node_modules files

- for running application in our local server we need to install react & react-dom for this & remove CDN links from index.html file

- install react & react-dom

      npm i react react-dom

  - as the normal dependency we install this not dev dependency

- There are two dependency are there:

  - Normal Dependency:
    - This is used for production also
  - Dev Dependency:
    - This is needed for our development phase
    - All the packages that my project need i.e a dependency
    - They are the packages that are required for development & testing purposes only

- To run the Application in our system

      npx parcel index.html

- It will create a development server & it is done by the parcel

- parcel keep track of everything:

  - Hot Module Replacement
  - Bundling
  - Caching
  - Minification
  - Cleaning Our Code
  - Super fast build algorithm
  - Image Optimization
  - Consistent Hashing
  - Code Splitting
  - Diagnostic Error Handling (beutiful error messages)
  - Compatible with older version of browser
  - Does compression
  - Differential Bundling
  - parcel does lot of things for us

- Parcel manages port number
- Parcel also take care of compatible with older version

  - browser list

         "browserslist": [
           "last 2 Chrome version",
           "last 2 Firefox version"
         ]

  - It means it will definately work on last 2 chrome & firefox version & that is the beuty of browserslist

- parcel is a beast , it takes care of lot of things

- for building production build

      npx parcel build index.html

  - for this we remove entry point i.e App.js file in main we give
  - It conflicts with index.html file that we give at time of building index.html file as an entry point so remove it fro package.json file

- It will generate production build & it is ready to shipped on server

### Learn Lot of things from this lecure

# Laying the foundation 03:

- Understanding JSX, React componnets, and their compositions

- JSX, React components
- Class-based vs functional components
- create npm scripts to start our project

- Inside package.json

      "scripts": {
        "dev": "parcel index.html",
        "build": "parcel build index.html",
        "test": "jest"
      }

- To run our project

      npm run dev

- JSX is not HTMl, It is HTML or XML like syntax

- writing JSX code

      const jsxHeading = <h1 className="heading">Namaste React via JSX</h1>;

      const root = ReactDOM.createRoot(document.getElementById("root"));

      // root.render(heading);
      root.render(jsxHeading);

- JSX (transpiled before it reaches the JS Engine) - PARCEL - Babel

- JSX => React.createElement => ReactElement - JS Object => HTMLElement (render)

- Babel transpile the code JSX to React

- For using attribtes in Elements

- we use camelCase Syntax className, tabIndex,htmlFor...

      const jsxHeading = (
        <h1 className="heading" tabIndex="2">
          Namaste React via JSX
        </h1>
      );

- enclosed each tag

      <br/> <img/><hr/><input/> <></> ()

- Mandotory to use () for multiple lines of code

- React Components

  - Functional components - new way of writing code
  - Class Based components - old way of writing code

- Create functional Component

      const JsxHeading = () => {
        return (
          <h1 className="heading" tabIndex="2">
            Namaste React via Functional Components
          </h1>
        );
      };

- Always use pascal namimg convention (HeadingOne) capital component name

- use it like this

      <JsxHeading/>  // call it
