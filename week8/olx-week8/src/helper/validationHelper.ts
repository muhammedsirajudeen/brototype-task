export function  validationHelper(parameter:string):string{

    const regex = /[^a-zA-Z0-9\s]/;

    if((parameter.replace(/\s/g, "")).length===0){
        return "Shoult not be empty"
    }
    else if(parameter.length<8){
        return "should be minimum of 8 characters"
    }
    else if((regex.test(parameter))){
        return "cant contain special characters"
    }
    return ""
}