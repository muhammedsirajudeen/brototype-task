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
            req.session.username=username
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
    if(req.session.username){
        res.redirect('/home')
    }else{
        res.render('Login',
        {
            authenticated:false
        }
    )
    }
})

//if no session redirect to login page
router.get('/home',(req,res)=>{
    if(req.session.username){
        res.render("Home",
            {
                placeListing:placeListing,
                authenticated:true
            }
        )
    }else{
        res.redirect("/")
    }
})

router.get('/signout',(req,res)=>{
    req.session.destroy((err) => {
        if(err){
            console.log(err)
        } 
    } )
    res.clearCookie('cookie.sid')
    res.json({message:"success"})
})


module.exports=router