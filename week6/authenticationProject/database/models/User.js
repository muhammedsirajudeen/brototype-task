const mongoose=require("mongoose")
let User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.models.User;
} else {
  const userSchema=new mongoose.Schema({
      //add required
      username:String,
      password:String,
      authorization:{
        type:String,
        default:'user'
      } ,
      profileLink:String,
      email:String,
      place:String

  })

  User = mongoose.model('User', userSchema);
}

module.exports=User