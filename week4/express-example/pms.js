function returner(value){
    return new Promise((resolve,reject)=>{
        if(value>=7){
            reject("rejected")
        }else{
            resolve("success")
        }
    })
}

returner(6).then((value)=>console.log(value)).catch((value)=>console.log(value))