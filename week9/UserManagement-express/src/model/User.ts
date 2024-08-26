import mongoose,{Document,Schema} from "mongoose";

export interface IUser extends Document {
    email: string; // Optional field for user's name
    password: string; // Optional field for user's email
    profileImage?: string
  }
  
const userSchema:Schema<IUser>=new Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
            unique:false,
            length:8
        },
        profileImage:{
            type:String,
            required:false,
            unique:false
        }
    }
)
const User=mongoose.model<IUser>('User',userSchema)
export default User