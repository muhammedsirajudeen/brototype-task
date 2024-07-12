// "use strict"
function hey(){
    console.log(this)
}
hey()
let data=function (){
    console.log(this)
}
data()


let person={
    name:"sadin",
    display:()=>{
        console.log(this.name)
    }
}
person.display()