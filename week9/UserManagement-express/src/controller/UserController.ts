import { Request,Response } from "express"
import User from "../model/User"
interface userProps{
    email:string,
    password:string,
    profileImage:string
}
const UserUpdate=async (req:Request,res:Response)=>{
    try{
        const user=req.user as userProps
        const {phone,address,profileImage}=req.body
        // const checkUser=await User.findOne({email:req.})
        const updateUser=await User.updateOne(
            {
                email:user.email
            },
            {
                phone:phone,
                address:address,
                profileImage:profileImage ?? user.profileImage
            }
        )
        res.status(200).json({message:"success"})
    
    }catch(error){
        console.log(error)
        res.status(501).json({message:"server error"})
    }
}

export default {
    UserUpdate
}