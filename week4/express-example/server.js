const http=require("http")

let server=http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === "/"){
        res.end("hello world")
    }else if(req.url == "/hey"){
        res.end("hey")
    }
})
server.listen(3000,()=>console.log("server started"))


