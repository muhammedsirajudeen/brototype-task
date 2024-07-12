const readline=require("readline-sync")

function multiplication(number){
    for(let i=1;i<=10;i++){
        console.log(i,"X",number,"=",i*number)
    }
} 

let num=Number.parseInt(readline.question("enter the number"))
multiplication(num)