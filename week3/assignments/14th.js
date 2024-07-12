const readline=require("readline-sync")

let length=Number.parseInt(readline.question("enter the size of arrays"))

function displayer(firstarray,limit){
    console.log("\t\t displaying arrays \t\t");
    for(let i=0;i<limit;i++){
        for(let j=0;j<limit;j++){
            console.log(firstarray[i][j])
        }
    }
}

function adder(firstarray,secondarray,limit){
    let incrementarray=[]
    for(let i=0;i<limit;i++){
        let inner=[]
        for(let j=0;j<limit;j++){
            let sum=firstarray[i][j]+secondarray[i][j]
           inner.push(sum)
        }
        incrementarray.push(inner)
    }
    return incrementarray
}

function getArray(length,arg){

    let first=[]
    for(let i=0;i<length;i++){
        let inner=[]
        for(let j=0;j<length;j++){
            inner.push(Number.parseInt(readline.question(`enter the element of the ${arg} array`)))
        }
        first.push(inner)
    }
    return first
    }

let first=getArray(length,"first")
let second=getArray(length,"second")

let newarray=adder(first,second,length)
displayer(newarray,length)


