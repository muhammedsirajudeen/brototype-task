const readline=require("readline-sync")
class arrayclass{
    constructor(array,length){
        this.array=array
        this.length=length
    }
    displayer(array){
        console.log("\t\t displaying arrays \t\t");
        for(let i=0;i<this.length;i++){
            for(let j=0;j<this.length;j++){
                process.stdout.write(array[i][j]+' ')
            }
            console.log("\n")
        }
    }
    getArray(){
        this.length=Number.parseInt(readline.question("enter the length"))
        let newarray=[]
        for(let i=0;i<this.length;i++){
            let inner=[]
            for(let j=0;j<this.length;j++){
                inner.push(Number.parseInt(readline.question("enter the element")))
            }
            newarray.push(inner)
        }
        return newarray
    }

    
}
let objarray=new arrayclass()

let newarray=objarray.getArray()
console.log(newarray)
objarray.displayer(newarray)