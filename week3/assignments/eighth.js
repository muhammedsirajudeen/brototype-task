const readline=require("readline-sync")

function oddAdder(limit){
    let sum=0
    for(let i=1;i<=limit;i++){
        if(i%2!=0){
            sum+=i
        }
    }
    return sum;
}

let limit=Number.parseInt(readline.question("enter the limit"))
console.log(oddAdder(limit))