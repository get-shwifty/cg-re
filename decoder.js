// https://codeshare.io/GqPoNz

const fs = require("fs");
const _ = require("lodash");

var file = fs.readFileSync("A.txt", "utf-8").toString().split("\n");

file.shift();
var [W, H, N] = file.shift().split(" ").map(_.toNumber)

console.log(W, H, N);
