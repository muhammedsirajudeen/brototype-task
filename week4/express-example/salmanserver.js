const http = require("http");
let server=http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("<html><body><b>hey</b></body></html>")
    res.end()
})

server.listen(3000,()=>console.log("server started"))