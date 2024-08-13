const fs=require("fs/promises")

async function fileReader(){
    let data = await fs.readFile("./hello.txt")
    console.log(data.toString())
}
fileReader()


async function fileWriter(){
    let data=await fs.writeFile("./hello.txt","data to be written")
    console.log(data)
}
async function fileAppender(){
    let data=await fs.appendFile("./hello.txt","data to be appended")
    console.log(data)
}
fileWriter()
fileAppender()
