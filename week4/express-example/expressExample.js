const express = require("express")
const path=require("path")
const app = express()
const PORT=3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"sample.html"))
})

app.all('/auth',(req,res)=>{
    console.log(req.method)
    if(req.method==='POST'){
        console.log(req.body)
        let {name}=req.body
        console.log(name)
    }
    res.json({message:"success"})
})

app.listen(PORT,() => console.log(`SERVER STARTED AT ${PORT}`) )