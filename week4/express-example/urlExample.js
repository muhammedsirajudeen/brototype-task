const url=require("url")

let urlData="http://localhost/user?id=1"
let parser=new URL(urlData)
console.log(parser.searchParams.get("id"))