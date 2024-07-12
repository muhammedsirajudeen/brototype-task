let person={
    name:"siraj",
    age:"10",
    methods:()=>{
        console.log("hey")
    }
}
person.method?.()

let names=null
let returnvalue=names ?? []
console.log(returnvalue)