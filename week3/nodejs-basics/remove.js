const readline=require("readline-sync")
const index=readline.question("enter the index")
const array=[1,2,3,4,5]
array.splice(index,1)
console.log(array)