const readline=require("readline");
let fs=require('fs');
const http=require('http');

const html=fs.readFileSync('./creatingsimplewebserver.html','utf-8')
const css=fs.readFileSync('./creatingsimplewebserver.css','utf-8')
// step1: Creating a serer;

const server =http.createServer((request,response)=>{
    console.log(request.url)
    if(request.url=="/creatingsimplewebserver.html"){
        response.end(html)

    }else if(request.url=="/creatingsimplewebserver.css"){
        response.end(css)
    }


});
 
// Step2: Start the server

server.listen(8000,'127.0.0.1',()=>{
    console.log('server has started');
});