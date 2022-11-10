const readlineSync = require("readline-sync")

const operations = ["add", "sub", "mul", "div"]

const num1 = readlineSync.question("enter first number: ")
const num2 = readlineSync.question("enter second number: ")

const choice = readlineSync.keyInSelect(operations, "Please enter the operation you want to perform: add, sub, mul, or div ")

if(operations[choice] == 'add'){
    console.log('The result is: ' + add(num1, num2))
} else if(operations[choice] == 'sub'){
    console.log('The result is: ' + sub(num1, num2))
} else if(operations[choice] == 'mul'){
    console.log('The result is: ' + mul(num1, num2))
}else{
    (operations[choice] == 'div')
    console.log('The result is: ' + div(num1, num2))
}




function add(num1, num2){
    return (Number(num1) + Number(num2))
}
function sub(num1, num2){
    return (Number(num1) - Number(num2))
}
function mul(num1, num2){
    return (Number(num1) * Number(num2))
}
function div(num1, num2){
    return (Number(num1) / Number(num2))
}

