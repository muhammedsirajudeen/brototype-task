function* yielder(){
    for(i=1;i<=100;i++){
        yield 5*i
    }
}
let generator=yielder()
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)


function hello(a){
    console.log(arguments)
}

hello(10)