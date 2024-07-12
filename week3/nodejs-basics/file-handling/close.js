function inner(){
    let a = 10;
    function innerinner(){
        return a;
    }
    return innerinner

}
let close=inner()
let value=close()
console.log(value)