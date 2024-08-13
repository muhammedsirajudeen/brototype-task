const express=require("express")
const app=express()



app.get('/',(req,res)=>{
    res.send("hello world")
})

app.param('id',(req,res,next,id)=>{
    console.log("ENTERED THE LOG")
    next()
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params.id)
    res.send("the entered user is "+req.params.id)
})

app.listen(3003,()=>console.log("hey"))