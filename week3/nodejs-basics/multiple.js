const readline=require("readline-sync")
function* yielder(num,limit){
    for(let i=1;i<=limit;i++){
        yield i*num
    }
}
let number=Number.parseInt(readline.question("enter the number"))
let limit=Number.parseInt(readline.question("enter the limit"))
let yieldergen=yielder(number,limit)
for(let i=1;i<=limit;i++){
    let result=yieldergen.next().value
    console.log(result)
}
