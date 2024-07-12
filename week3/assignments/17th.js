const readline=require("readline-sync")



let result=0

while(true){
    let choice=Number.parseInt(readline.question("Enter your choice \n 1.ADDITION \n 2.SUBTRACTION \n 3.MULTIPLICATION \n 4.DIVISION \n 5.quit \t"))
    if(choice===5){
        console.log("exited successully")
        break
    }
    let oeprandone=Number.parseInt(readline.question("enter the first operand"))
    let operandtwo=Number.parseInt(readline.question("enter the second operand"))

    switch(choice){
        case 1:
            console.log(oeprandone+operandtwo)
            break
        case 2:
            console.log(oeprandone-operandtwo)
            break
        case 3:
            console.log(oeprandone*operandtwo)
            break
        case 4:
            console.log(oeprandone/operandtwo)
            break
        default:
            console.log("invalid choice")
    }

}