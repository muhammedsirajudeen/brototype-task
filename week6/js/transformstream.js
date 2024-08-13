const fs=require("fs")

const {Transform}=require("stream")

const read=fs.createReadStream("./hey.txt")

read.on("open",()=>console.log("opened"))
read.on("data",(data)=>console.log(data.toString()))

let reverse=Transform(
    {
        transform(chunk,encoding,callback){
            callback(null,chunk.toString().split('').reverse().join(''))
        }
    }
)

const write=fs.createWriteStream("./hello.txt")


read.pipe(reverse).pipe(write)
