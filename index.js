let print = require("./stars");
let stars = print.stars(process.argv[3]);
const string = process.argv[2] || "hi";
const arr = [stars, string, stars];
arr.forEach(x => console.log(x))


