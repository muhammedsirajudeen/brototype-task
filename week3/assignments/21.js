const readline=require("readline-sync")

function adjadder(array,limit){
    let multiplier=0
    let newarr=[]
    for(let i=0;i<limit;i++){
        if(i+1==limit){
            break
        }
        multiplier=(array[i])*(array[i+1])
        newarr.push(multiplier)
    }
    return newarr
}


let limit=Number.parseInt(readline.question("enter the limit"))

let array=[]
for(let i=0;i<limit;i++){
    array.push(Number.parseInt(readline.question("enter the element")))
}

let newarr=adjadder(array,limit)
console.log(newarr)