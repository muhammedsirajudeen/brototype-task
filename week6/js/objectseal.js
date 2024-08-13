// // "use strict"
// (function () {
//     console.log("hey")  // I will invoke myself
// })();
// let obj = {
//     name:"sirajudeen"
// }

// Object.seal(obj)
// obj.name="salman"
// console.log(obj)


// let obj1={
//     name:"sirajudeen"
// }
// Object.freeze(obj1)
// obj1.name="salman";
// //makes it completely immutable
// console.log(Object.isFrozen(obj1));


// (function () {
//     console.log("hey")  // I will invoke myself
// })();

let obj2={
    name:"sirajudeen",
    display:function (){
        console.log(this)
    }
}
let func=()=>{
    console.log(this)
}
func()
//why the immediate parent here is not global
obj2.display()

console.log(globalThis.queueMicrotask)