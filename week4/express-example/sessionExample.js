const session=require("express-session")
const express=require("express")
const app=express()
const PORT=3000

app.use(session(
    {
        secret:"adil",
        resave:true,
        saveUninitialized:true,
    }
))

app.get('/',(req,res)=>{
    if(!req.session.visited){
        req.session.visited=true
        res.json({message:"welcome again mr new visitor"})

    }else{
        res.json({message:"welcome again mr visitor"})
    }
})

app.listen(PORT,()=>console.log(`SERVER STARTED ${PORT}`))