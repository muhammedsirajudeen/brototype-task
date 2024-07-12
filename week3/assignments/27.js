const readline=require("readline-sync")
let number=Number.parseInt(readline.question("enter the number"))

function thrower(number){
    if(isNaN(number)){
        throw new Error("Not a Number")
    }else if(number>=50){
        throw new Error("Huge Height Error")
    }else if(number<=0){
        throw new Error("Tiny Height Error")
    }else{
        console.log(number)
    }
    
}

thrower(number)