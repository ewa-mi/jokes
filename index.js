const express = require("express");
const app = express();

const jokeMessage = (request) => `<html>
  <head>
    <title>Joker</title>
  </head>

  <body>
    <h1>Welcome to the joker's page ${request.params.name}!</h1>
  </body>
</html>`;

app.get("/user/:name", (request, response) => {
  response.send(jokeMessage(request));
});

function onListen() {
  console.log(`Server has started`);
}

const port = 3000;

app.listen(port, onListen);
