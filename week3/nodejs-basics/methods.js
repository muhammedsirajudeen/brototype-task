// let a = [1,2,3,4,5]
let obj={
    name:"rafan",
    place:"kondotti".replace,
    display:()=>{
        console.log("hey")
    }
}

// for (value of Object.entries(obj)){
    
// }
// console.log(a.splice(2,1,1))
// console.log(a.slice(0,3))

// let maps=new Map()
// maps.set("name","rafan")
// let data=maps.get("name")
// console.log(data)


//this is used to handle stuff
let newobj={}
const proxy1=new Proxy(obj,newobj)
proxy1.name="hey"

console.log(proxy1.name)
// proxy1.name="hey"
console.log(obj.name)

proxy1.display()