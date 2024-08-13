class Hey{
    name
    constructor(name){
        this.name=name
    }
    display(){
        console.log(this.name)
        return this.name
    }
}

class Hello extends Hey{
    // static age=10
    constructor(age){
        super("salman")    
        this.age=age
    }
    displayhere(){
        console.log(super.display(),this.age)
    }

}
let hel=new Hello(10)
hel.displayhere()

console.log(Hey.age)