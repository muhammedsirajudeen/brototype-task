const express=require("express")
const app=express()


app.get("/home",(req,res)=>{
    if(req.query.a && req.query.b){
        res.redirect(`/summer?a=${req.query.a}&b=${req.query.b}`)
    }else if(req.query.sum){
        
        res.send("the sum is "+req.query.sum)
    }
    else{
        res.send("error")
    }
})

app.get('/summer',(req,res)=>{
    let sum=parseInt(req.query.a)+parseInt(req.query.b)
    res.redirect(`/home?sum=${sum}`)
})

app.listen(3000,()=>console.log("server started"))