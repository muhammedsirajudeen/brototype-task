const express=require("express")
const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post('/',(req,res)=>{
    let data = req.body.name
    console.log(data)
    res.json({message:"success"})
})
app.get('/user',(req,res)=>{
    let data = req.query.id
    console.log(data)
    res.json({message:"success"})
})

app.get('/')

app.listen(3000,()=> console.log("server started at port 3000"))