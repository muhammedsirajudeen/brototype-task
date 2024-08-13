const fs=require("fs/promises")


async function reader(){
    let data=await fs.readFile("./hey.txt")
    console.log(data.toString())
}
reader()

async function writer(){
    await fs.writeFile("./hey.txt","rafan kuttan")
}

writer()