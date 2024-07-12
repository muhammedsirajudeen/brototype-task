function partialapplication(greeting,name){
    console.log(greeting,name)
}

let partial=partialapplication.bind(null,"good morning")
let result=partial("sadin")
