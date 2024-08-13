let Person={
    name:"rafan",
    place:"kondotti",
    display:function (){    
    let greeter=()=>{
        console.log(this.name,this.place)
    }
    greeter()
}
}
Person.display()

