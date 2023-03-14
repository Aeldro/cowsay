const myInfos = require("./information");
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `My name is ${myInfos.myName} and I come from ${myInfos.myCampus}.`
}))