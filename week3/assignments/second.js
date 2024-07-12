const readline=require("readline-sync")

function sum(num1,num2){
    return num1+num2
}

let firstnum=Number.parseInt(readline.question("enter the first number \t"))
let secondnum=Number.parseInt(readline.question("enter the second num \t"))

let result=Number.parseFloat(sum(firstnum,secondnum))
console.log("The sum is \t",result)