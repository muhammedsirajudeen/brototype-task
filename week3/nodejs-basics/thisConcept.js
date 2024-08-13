"use strict"
function hello(){
    console.log(this)
}
hello()

let obj={name:"sadin"}
let func=function (){
    console.log(this)
}
func.call(obj)

let funcs=()=>{
    console.log(this)
}
funcs.call(obj)


let objs={
    name:"sadin"
}
// let person=Object.create(objs)
let person=objs
person.name='siraj'
console.log(person)
console.log(objs)



function displayer(strings,...values){
    console.log(strings)
    console.log(values)
}
displayer`the name is ${objs.name} `

let num=[1,2,3,4]
num.splice(0,0,1,2,3)
console.log(num)
console.log("%c hello world",'color:blue;')