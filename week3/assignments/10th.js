const readline=require("readline-sync")

const first=[]
const second=[]

let firstlen=Number.parseInt(readline.question("enter the length of  arrays"))

//we can use .length if we want 
function displayer(firstarray,secondarray,limit){
    console.log("\t\t\t----FIRST ARRAY----\t\t\t")
    for(let i=0;i<limit;i++){
        process.stdout.write(firstarray[i] + ' ');
    }
    console.log("\n");
    console.log("\t\t\t----SECOND ARRAY----\t\t\t")
    for(let i=0;i<limit;i++){
        process.stdout.write(secondarray[i]+' ');

    }
    console.log("\n");
    
}

function swapper(firstarray,secondarray,limit){

    for(let i=0;i<limit;i++){
        let temp=firstarray[i]
        firstarray[i]=secondarray[i]
        secondarray[i]=temp
    }
    

}



for(let i=0;i<firstlen;i++){
    let element=Number.parseInt(readline.question("enter the first element"))
    first.push(element)
}

for(let i=0;i<firstlen;i++){
    let element=Number.parseInt(readline.question("enter the second element"))
    second.push(element)
}
displayer(first,second,firstlen)
swapper(first,second,firstlen)
displayer(first,second,firstlen)



