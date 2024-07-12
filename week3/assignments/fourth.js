const readline=require("readline-sync")

function checker(mark){
    if(mark<50){
        return "failed"
    }else if(mark>=50){
        return "passed"
    }else{
        return "invalid value"
    }
}

const mark=Number.parseFloat(readline.question("enter the mark of the student"))
let result=checker(mark)
console.log(result)