const readline=require("readline-sync")

let array=[]
let limit=Number.parseInt(readline.question("enter the size"))
for(let i=0;i<limit;i++){
    array.push(Number.parseInt(readline.question("enter the element")))
}

function callback(accumulator,currentvalue){
    return accumulator+currentvalue
}

let sum=array.reduce(callback,0)

sum % 2 == 0 ? console.log("the sum is even") : console.log("the sum is odd") 