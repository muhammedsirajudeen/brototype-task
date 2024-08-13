const express=require("express")
const app=express()

//middleware are functions that sit beside the req res next cycle
function Logger(req,res,next){
    console.log("LOGGING DATA")
    next()
}

app.use(Logger)

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/products/:id',(req,res)=>{
    let {id}=req.params
    res.send(`you entered ${id}`)

})
app.get('/user',(req,res)=>{
    let {userid}=req.query

    let {name}=req.query
    console.log(userid,name)
    res.send(`hello from user ${userid}`)
})

function sumHandler(request,response,next){
    let num=Number.parseInt(request.params.numone)
    let num2=Number.parseInt(request.params.numtwo)
    request.sum=num+num2
    next()
}

function sumHandlertwo(request,response,next){
    response.send("the sum is "+request.sum)
}

app.get('/sum/:numone/:numtwo',[sumHandler,sumHandlertwo])




app.listen(3000,()=>console.log("server started at port 3000"))