const readline=require("readline-sync")
class MyClass{
    constructor(){

    }
    main(){

    }
    circle(){

    }
    square(){

    }
    rectangle(){

    }
    triangle(){

    }
}

class Area extends MyClass {
    
    circle(radius){
        return (radius**2)*Math.PI
    }
    square(length){
        return length*length
    }
    rectangle(length,breadth){
        return length*breadth
    }
    triangle(base,height){
        return (0.5*base)*height
    }
}
function main(){
    let areaclass=new Area()
    let result=areaclass.circle(Number.parseInt(readline.question("enter the radius")))
    console.log(result)
    result=areaclass.square(Number.parseInt(readline.question("enter the length")))
    console.log(result)
    result=areaclass.rectangle(Number.parseInt(readline.question("enter the length")),Number.parseInt(readline.question("enter the breadth")))
    console.log(result)
    result=areaclass.rectangle(Number.parseInt(readline.question("enter the base")),Number.parseInt(readline.question("enter the height")))
    console.log(result)
}
main()
