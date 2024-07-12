class Person{
    constructor(name,age,place){
        this.name=name
        this.age=age
        this.place=place
    }
    display(){
        console.log(this.name,this.age,this.place)
    }
}
let Sadin= new Person("sadin",10,"chemmad")
Sadin.display()