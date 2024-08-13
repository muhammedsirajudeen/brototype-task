const fs = require("fs/promises");
const syncfs=require("fs")
const process=require("process")

async function opener() {
    let file = await fs.open("./hello.txt", "r+");
    let result = await file.write("salman is cool");
    process.nextTick(async () => {
    let data = await file.readFile();
    console.log(data.toString());
    });
}
async function exister(){
    try{
        let file=await fs.access("./salman.txt")
    }catch(error){
        console.log(error)
    }
}
// exister()

async function syncExister(){
    if(!syncfs.existsSync("./salman.txt")){
        console.log("salman file does not exist")
    }
}

// opener();
syncExister()