const readline=require("readline-sync")

let limit=Number.parseInt(readline.question("enter the limit"))
let count=1
for(let i=0;i<limit;i++){
    for(let j=0;j<=i;j++){
        process.stdout.write(count + ' ')
    }
    count++
    console.log("\n")
}