const fs = require("fs");

//sync 방식
console.log("1");
var data_sync = fs.readFileSync("data.txt", { encoding: "utf8" });
console.log(data_sync);

//async 방식
console.log("2");
fs.readFile("data.txt", { encoding: "utf8" }, function (err, data) {
  console.log("3");
  console.log(data);
});
console.log("4");
