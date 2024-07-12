const readline=require("readline-sync")

function primeChecker(number){
    let flag=true
    if(number == 0 || number == 1){
        flag=false
    }else{
        for(let i=2;i*i<=number;i++){
            if(number%i==0){
                flag=false
                break
            }
        }
    }
    return flag
}

let number=Number.parseInt(readline.question("enter the number"))
let flag=primeChecker(number)
console.log(flag)