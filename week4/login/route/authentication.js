const express=require("express")
const placeListing=require('../placeLister')

const router=express.Router()

const user={
    username:'sirajudeen',
    password:'sirajudeen'
}

router.post('/auth',(req,res)=>{
    try{
        let {username,password}=req.body
        if(username === user.username && password === user.password ){
            res.json({message:"success"})
        }else{
            res.json({message:"invalid credentials"})
        }
    
    }catch(error){
        console.log(error)
        res.json({message:"failure"})
    }
})

//if session redirect to home
router.get('/',(req,res)=>{
    res.render('Login')
})

//if no session redirect to login page
router.get('/home',(req,res)=>{
    res.render("Home",
        {
            placeListing:placeListing
        }
    )
})



module.exports=router