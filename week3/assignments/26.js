const readline=require("readline-sync")

let userstring=readline.question("enter the string")

try{
    console.log(userstring.split('').reverse().join(''))
    

}catch(error){
    console.log(`ERROR: ${error}`)
}
finally{
    console.log(`Type of my_string is: ${typeof(userstring)}`)
}