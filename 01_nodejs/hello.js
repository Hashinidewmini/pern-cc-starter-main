import os from "os";

console.log("Node is running this JavaScript file!");

console.log(os.platform());

//to get memory size in gb
console.log(os.totalmem() / 1024 / 1024 / 1024);