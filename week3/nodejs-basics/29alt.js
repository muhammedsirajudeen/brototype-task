const readline=require("readline-sync")
let a=[]
let limit=Number.parseInt(readline.question("enter the limit"))
for(let i=0;i<limit;i++){
    let element=Number.parseInt(readline.question("enter the element"))
    a.push(element)
}

function myfilter(a){
    var accumulator=0
    for( value of a ){
        accumulator+=value
    
    }
    console.log(accumulator)
    return (accumulator%2==0 ? true : false  )
}


function reducer(a,myfilter){
    let flag=myfilter(a)
    flag ? console.log("it is even") : console.log("it is odd")
    
}
reducer(a,myfilter)



let obj={
    name:"sadin",
    greet:()=>{
        console.log(this.name)
    }
}
