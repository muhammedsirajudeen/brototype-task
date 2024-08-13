const fs=require("fs/promises")

async function deleter(){
    try{
        await fs.unlink("./hey.txt")
        console.log("deleted")
    }catch(error){
        console.log(error)
    }
    
}

async function reader(){
    try{
        let data=await fs.readFile("./hey.txt")
        console.log(data.toString().split('\n'))
    }catch(error){
        console.log(error)
    }
}
async function exist(){
    try{
        let data=await fs.access("./heys.txt",fs.constants.F_OK)
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
// reader()
// deleter()
exist()