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
    while(true){
        let choice=Number.parseInt(readline.question("Enter The Choice \n 1.Circle \n 2.Square \n 3.Rectangle \n 4.Triangle \n 5.Exit"))
        let result
        if(choice===5) break
        switch(choice){
            case 1:
                result=areaclass.circle(Number.parseInt(readline.question("enter the radius")))
                console.log(result)
                break
            case 2:
                result=areaclass.square(Number.parseInt(readline.question("enter the length")))
                console.log(result)
                break
            case 3:
                result=areaclass.rectangle(Number.parseInt(readline.question("enter the length")),Number.parseInt(readline.question("enter the breadth")))
                console.log(result)
                break
            case 4:
                result=areaclass.rectangle(Number.parseInt(readline.question("enter the base")),Number.parseInt(readline.question("enter the height")))
                console.log(result)
                break
            default:
                console.log("Invalid Choice")
                break
        }
    }
}
main()
