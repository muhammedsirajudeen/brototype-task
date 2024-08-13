const app=require("express")()

app.get('/',(req,res)=>{
    res.cookie("name","sirajudeen")
    res.send("hey")
})
app.get('/hey',(req,res)=>{
   res.clearCookie("name")
    res.send("helo")
})

app.listen(3000,()=>console.log(`Server Started At ${3000}`))