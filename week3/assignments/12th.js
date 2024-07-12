const readline=require("readline-sync")


function displayer(firstarray,limit){
    console.log("\t\t\t----FIRST ARRAY----\t\t\t")
    for(let i=0;i<limit;i++){
        process.stdout.write(firstarray[i] + ' ');
    }

    
}
function sorter(array,limit){
    for(let i=0;i<limit;i++){
        for(let j=0;j<limit-1;j++){
            if(array[i]>array[j]){
                let temp=array[j]
                array[j]=array[i]
                array[i]=temp
            }
        }
    }
}


let firstlen=readline.question("enter the length of the array")
const first=[]
for(let i=0;i<firstlen;i++){
    let element=Number.parseInt(readline.question("enter the first element"))
    first.push(element)
}
sorter(first,firstlen)
displayer(first,firstlen)
