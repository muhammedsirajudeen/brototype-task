//shallow copy
let object={
    name:"sadin",
    age:"18"
}
// let newobj=object
// newobj.name="siraj"
// console.log(newobj)



//deep copy
let deepobj=JSON.parse(JSON.stringify(object))
deepobj.name="siraj"
console.log(deepobj)
console.log(object)

