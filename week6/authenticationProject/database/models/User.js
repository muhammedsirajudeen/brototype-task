const mongoose=require("mongoose")
let User;

if (mongoose.models && mongoose.models.User) {
  User = mongoose.models.User;
} else {
  const userSchema=new mongoose.Schema({
      
      username:String,
      password:String,
      authorization:String,
      profileLink:String
  })

  User = mongoose.model('User', userSchema);
}

module.exports=User