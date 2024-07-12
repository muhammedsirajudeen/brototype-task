const readline=require("readline-sync")

let income=(Number(readline.question("enter the income"))/100000)
let tax=0
if(income<=2.5){
    tax=0
}else if(income>2.5 && income<=5){
    tax=income*0.05
}
else if(income>5 &&  income <=10){
    tax=income*0.10
}
else if(income>10 && income<=50 ){
    tax=income*0.30
}else{
    console.log("enter valid valud")
}
console.log(tax*100000)