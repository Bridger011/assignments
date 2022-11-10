const readlineSync = require("readline-sync")

const name = readlineSync.question("enter name: ")
console.log("welcome to Treasure Island" + " " + name + "!!")
const options = ["Cave", "Jungle", "Beach"]
const choice = readlineSync.keyInSelect(options, "Choose your path")

if(options[choice]=="Cave"){
    console.log("You have entered the cave let's hope you survive!")
}