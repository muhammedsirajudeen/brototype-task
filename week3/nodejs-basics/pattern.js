const readline=require("readline-sync")
const limit=Number.parseInt(readline.question("enter the limit"))
function getinitialParameter(limit){
    let initialparameter=(limit * (limit+1) )/2;
    return initialparameter
}
for(let i=limit;i>=1;i--){
    let initialparameter=getinitialParameter(i)
    for(let j=i;j>=1;j--){
        process.stdout.write(initialparameter-j+1+'  ')

    }
    console.log()
}