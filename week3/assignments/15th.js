const readline=require("readline-sync")
let length=Number.parseInt(readline.question("enter the length of array"))

function createArray(length){
    let array=[]
    for(let i=0;i<length;i++){
        array.push(Number.parseInt(readline.question("enter the element")))
    }
    return array
}
function displayArray(array,length){
    for(let i=0;i<length;i++){
        process.stdout.write(array[i] + ' ');
    }
    console.log("\n")
}

let array=createArray(length)
displayArray(array,length)