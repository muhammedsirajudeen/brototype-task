const readline=require("readline-sync")

let limit=Number.parseInt(readline.question("enter the limit"))
const array=[]
for(let i=0;i<limit;i++){
    array.push(Number.parseInt(readline.question("enter the element")))
}
const filtered=array.filter((value)=>{
    return (value%2==0)
})
filtered.forEach((value)=>{
    console.log(value)
})
