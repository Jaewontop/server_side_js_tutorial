const express = require("express");
var app = express();

app.locals.pretty = true; //마크업을 이쁘게 볼 수 있음

app.set("view engine", "jade"); //jade로 view engine을 바꾼다
app.set("views", "./views"); //views 폴더를 참조하겠다

app.get("/template", function (req, res) {
  res.render("temp", { time: Date(), _title: "Jade" }); //template으로 라우팅했을 때 views 폴더 안에 있는 temp.jade 파일을 렌더링한다. 그리고 time, _title 이라는 변수를 전달한다.
});

app.use(express.static("public")); //public이라는 디렉토리를 정적인 파일이 위치하는 디렉토리로 하겠다!

app.get("/topic", function (req, res) {
  const topics = ["javascript is....", "Nodejs is....", "Express is...."];
  var output = `
  <a href="/topic?id=0">Javascript</a><br/>
  <a href="/topic?id=1">NodeJs</a><br/>
  <a href="/topic?id=2">Express</a><br/><br/>
  ${topics[req.query.id]}
  `;

  res.send(output);
});

app.get("/topic/:id/:mode", function (req, res) {
  res.send(req.params.id + "," + req.params.mode);
});

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
