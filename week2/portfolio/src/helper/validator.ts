import * as EmailValidator from 'email-validator';

class Validator{

    specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    nameValidator(name:string) : string  {
        //check if empty
        if(name.length===0){
            return "the field cant be empty"
        }
        // regex to check if there is whitespace
        else if((name.replace(/\s+/g, '')).length==0){

            return "please enter proper name"
        }
        else if(this.specialCharRegex.test(name)){
            return "cant contain special character"
        }
        else if(name.length<=4){
            return "must be greater than four characters"
        }else{
            return ""

        }

    }
    emailValidator(email:string) : string {
        if(email.length === 0){
            return "the field cant be empty"
        }
        else if(EmailValidator.validate(email)===false){
            return "please enter a proper email address"
        }else{
            return ""

        }
    }
    numberValidator(number:string) : string{
        if(number.length===0){
            return "the field cant be empty"
        }
        else if(number.length<10){
            return "it should contain atleast 10 digits"
        }
        else if((number.replace(/\s+/g, '')).length==0){

            return "please enter proper number"
        }else{
            return ""
        }
    }


}

let validator:Validator=new Validator()
export default validator

