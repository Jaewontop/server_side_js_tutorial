const express = require("express");
var app = express();

app.use(express.static("public")); //public이라는 디렉토리를 정적인 파일이 위치하는 디렉토리로 하겠다!

app.get("/", function (req, res) {
  res.send("hello homepage");
}); //라우팅

app.get("/dynamic", function (req, res) {
  var lis = "";
  for (var i = 0; i < 5; i++) {
    lis = lis + "<li>coding</li>";
  }

  var output = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>static</title>
  </head>
  <body>
      <h1> hello im Dynamic</h1>
      ${lis}
  </body>
  </html>
  `;
  res.send(output);
});

app.get("/route", function (req, res) {});

app.get("/login", function (req, res) {
  res.send("<h1>login please</h1>");
});

app.listen(3000, function () {
  console.log("connected 3000 port!");
});
