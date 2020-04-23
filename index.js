const express = require("express");
const app = express();

const jokesCollection = [
  "<img src='https://i1.wp.com/livelypals.com/wordpress/wp-content/uploads/2019/06/when-you-eat-stress-eating-meme.jpg?fit=700%2C875&ssl=1'>",
  "<img src='https://static.boredpanda.com/blog/wp-content/uploads/2020/03/2-5e6f5a781488f__700.jpg'>",
  "<img src='https://www.shutupandtakemymoney.com/wp-content/uploads/2020/04/can-you-guys-please-recommend-books-that-made-you-cry-kylie-jenner-tweet.jpg'>",
  "I saw a driver texting and driving. It made me so mad I threw my beer at him.",
  "Fred: Can you tell me about that new do-it-yourself orthodontist? Ted: Brace yourself.",
  "A perfectionist walked into a bar...apparently, the bar wasn’t set high enough.",
];

const youngCollection = [
  "It’s a good thing snakes and dogs don’t interbreed. Nobody wants a loyal snake.",
  "Q: How do you do make an Octopus laugh? A: With tentacles!",
  "<img src='https://funnyfoto.org/wp-content/uploads/2018/01/Funny-Animal-Memes-of-Day-to-Make-You-Smile-1_01_28_2018.jpg'>",
  "<img src='https://i.imgflip.com/25v8la.jpg'>",
  "<img scr='https://photos.metrotimes.com/wp-content/uploads/2016/04/1-ring-to-rule.jpg'>",
];

const jokeTitle = (request) => `
<html>
    <style> 
        h1 {
            color: #FABF00;
            text-align: center;
            font-size: 70px;
        }
        body {
          background-color: black;
          padding: 20px;
        }
    </style>
  <head>
    <title>Joker</title>
  </head>

  <body>
    <h1>Welcome to the joker's page, ${request.params.name}! This is a random joke:</h1>
`;

const jokeUnder18 = (joke) => `  
    <h1>${joke}</h1>
    </body>
</html>
`;

const jokeOver18 = (joke) => `  
    <h1>${joke}</h1>
    </body>
</html>
`;

app.get("/user/:name/:age", (request, response) => {
  let pageTitle = jokeTitle(request);
  let pageJoke;

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  if (parseInt(request.params.age) < 18) {
    const randomYoungJokeNumber = getRandomInt(youngCollection.length - 1);
    pageJoke = jokeUnder18(youngCollection[randomYoungJokeNumber]);
  } else {
    const randomJokeNumber = getRandomInt(jokesCollection.length - 1);
    pageJoke = jokeOver18(jokesCollection[randomJokeNumber]);
  }
  const fullPage = pageTitle + pageJoke;
  response.send(fullPage);
});

function onListen() {
  console.log(`Server has started`);
}

const port = 3000;

app.listen(port, onListen);
