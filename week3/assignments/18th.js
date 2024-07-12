const readline=require("readline-sync")

let written=Number.parseInt(readline.question("enter the mark of writtent test"))
let labexama=Number.parseInt(readline.question("enter the mark of lab exams"))
let assignments=Number.parseInt(readline.question("enter the mark of assignments"))

console.log("The total grade is",((written*70)/100)+((labexama*20)/100)+((assignments*10)/100))