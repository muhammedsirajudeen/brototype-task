const readline=require("readline-sync")



let limit=readline.question("limit")

for(let i=1;i<=limit;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(j + ' ');

    }
    console.log("\n");
}
