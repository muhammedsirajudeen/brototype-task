import { Request,Response } from "express"

const REDIRECT_GOOGLE=(req:Request,res:Response)=>{
    console.log(req.session)
    res.json('success'); // Redirect after successful authentication

}

export default {
    REDIRECT_GOOGLE
}