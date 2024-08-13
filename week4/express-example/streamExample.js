const fs = require("fs");

let rs = fs.createReadStream("./hello.txt");

rs.on("error", () => console.log("error happened"));
rs.on("open", () => console.log("stream has been opened"));
rs.on("data", (data) => console.log("the data is",data.toString()));


function writeStreamer(){
    let ws=fs.createWriteStream("./hello.txt")
    ws.write("data is being written")
    ws.write("salman loves abdukka")
    ws.end(()=>console.log("file has been written"))
}
writeStreamer()