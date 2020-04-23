const express = require("express");
const app = express();

const jokeMessage = (request) => `<html>
  <head>
    <title>Joker</title>
  </head>

  <body>
    <h1>Joke goes here ${request.params.age}</h1>
  </body>
</html>`;

app.get("/user/:age", (request, response) => {
  response.send(jokeMessage(request));
});

function onListen() {
  console.log(`Server has started`);
}

const port = 3000;

app.listen(
  port, // TCP port where the server listens
  onListen // callback runs when server starts
);
