The mission of this series is to take you from Zero to Hero in React. During this journey, you will learn everything by watching videos and then implement it by building projects.

# Inception 01:

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
