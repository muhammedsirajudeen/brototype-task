const readline=require("readline-sync")

function Calculator(principal,interest,years,si){
    return ((principal*interest*years)/100)
}

const principal=Number.parseInt(readline.question("enter the principal amount"))
const interest=Number.parseFloat(readline.question("enter the interest rate"))
const years=Number.parseFloat(readline.question("enter the years"))

let result=Calculator(principal,interest,years)
console.log(result)