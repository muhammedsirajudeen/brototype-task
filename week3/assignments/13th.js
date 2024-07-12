const readline=require("readline-sync")

let userstring=readline.question("enter the string")

let stringarray=userstring.split('')

let length=stringarray.length
let flag=false
for(let i=0;i<length;i++){
    if(stringarray[i]===stringarray[length-1-i]){
        flag=true
    }else{
        flag=false
    }
}
if(flag){
    console.log("it is a palindrome")
}else{
    console.log("it is not a palindrome")
}