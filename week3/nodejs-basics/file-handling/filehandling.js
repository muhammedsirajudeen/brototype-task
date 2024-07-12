const fs=require("fs").promises
const readline=require("readline-sync")

async function reader (){
    let data=await fs.readFile("./hello.txt","utf-8")
    console.log(data)
}

async function writer(){
    try{
        let writer=await fs.writeFile("./hello.txt","data written")
        
    }catch(error){
        console.log(error)
    }

}
async function appender(){
    let value=readline.question("enter your text")
    try{
        await fs.appendFile("./hello.txt",value)
    }catch(error){
        console.log(error)
    }
}
reader()
writer()
appender()