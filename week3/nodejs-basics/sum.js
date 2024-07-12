let a=[1,2,3,4]

function summer(...args){
    let sum=args.reduce((accumulator,value)=>{
        return accumulator+value
    })
    return sum
}
let result=summer(...a)
console.log(result)