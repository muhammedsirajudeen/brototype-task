const express=require("express")
const router=express.Router()

const placeListing=require('../placeLister')

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

router.post('/auth',(req,res)=>{
    //get post data here
})

module.exports=router