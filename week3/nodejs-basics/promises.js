const value=new Promise((resolve,reject)=>{
    try{
        setTimeout(()=>{
            resolve("1000")
        },1000)
    
    }catch(error){
        reject("error happened")
    }
})

async function asyncdata(){
    let data=await value
    console.log(data)
}
asyncdata()


