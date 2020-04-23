const express = require("express");
const app = express();

const jokeTitle = (request) => `
<html>
    <style> 
        h1 {
            color: #FABF00;
        }
    </style>
  <head>
    <title>Joker</title>
  </head>

  <body>
    <h1>Welcome to the joker's page ${request.params.name}!</h1>
`;

const jokeUnder18 = (request) => `  
    <p>${request.params.age}</p>
    <h1>Q:How do you do make an Octopus laugh? A: With tentacles!</h1>
    </body>
</html>
`;

const jokeOver18 = (request) => `  
    <p>${request.params.age}</p>
    <h1>Q:some joke</h1>
    </body>
</html>
`;

// /user/matias/28
app.get("/user/:name/:age", (request, response) => {
  let pageTitle = jokeTitle(request);
  let pageJoke;

  if (parseInt(request.params.age) < 18) {
    pageJoke = jokeUnder18(request);
  } else {
    pageJoke = jokeOver18(request);
  }
  const fullPage = pageTitle + pageJoke;
  response.send(fullPage);
});

function onListen() {
  console.log(`Server has started`);
}

const port = 3000;

app.listen(port, onListen);
