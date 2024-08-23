import { createUserWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, ReactElement, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import validator from "validator";
import NetflixContext from "../../context/NetflixContext";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Create():ReactElement{
    const location=useLocation()
    const navigate=useNavigate()
    const context=useContext(NetflixContext)
    const [password,setPassword]=useState<string>("")
    const [errorstatus,setErrorstatus]=useState<string>("")
    const [loading,setLoading]=useState<boolean>(false)

    async function passwordHandler(e:ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value)
        if(validator.isStrongPassword(e.target.value)){
            setErrorstatus("strong")
        }else{
            setErrorstatus("weak")
            return
        }

        //continue the flow here
    }
    async function createHandler(){
        if(errorstatus==="strong"){
            setLoading(true)

            if(context.auth){
                try{
                    const user=await createUserWithEmailAndPassword(context.auth,location.state.email,password)
                    console.log(user.user)
                    toast("user created")
                    setTimeout(()=>{
                        navigate('/home')
                    },1000)
    
                }catch(error){
                    console.log(error)
                    toast("Error occured try again")
                }
    
            }
            setLoading(false)
    
        }else{
            toast("enter proper password")
        }
    }
    return(
        <div className="h-screen w-screen bg-white mt-0">
            <div className="flex w-full items-center justify-between">
                <div className="h-20 flex flex-col items-start justify-center">
                    <img src="netflixlogo.svg" className="h-40 w-40 m-10 "/>
                </div>
                <button className="border-hidden font-bold text-black mr-10 text-xl" onClick={()=>navigate('/')} >Signin</button>

            </div>
            <hr className=" w-full mt-10"></hr>

            <div className="flex mt-32 flex-col items-center justify-center">
                <p className="font-light text-sm">Step 4 of 4</p>
                <p className="text-3xl text-center font-bold">
                    Finish Setting Up  Your <br/> Account
                </p>
                <p className="text-xs font-bold mt-10">
                    {location.state.email}
                </p>
                <p className="w-64 text-center mt-10">
                Netflix is personalised for you. Create a password to watch on any device at any time.
                </p>
                <input type="password" className="h-14 border border-black mt-10 w-72 placeholder:text-gray-700" placeholder="Enter the password" value={password} onChange={passwordHandler} />
                <button className="mt-10  text-white h-14 w-40 font-bold text-xl flex items-center justify-center bg-red-600" onClick={createHandler} >
                    Create
                </button>
                <div className="flex items-center justify-center">
                    <ClipLoader
                        color={"red"}
                        loading={loading}
                        size={40}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
                <p className={`text-xs font-bold mt-4  ${(errorstatus === "weak") && "text-red-600"} ${(errorstatus === "strong") && "text-green-600"} `}>
                    {errorstatus ==="weak" && "Please enter strong password" }
                    {/* {errorstatus===undefined && ""} */}
                    {errorstatus==="strong" && "password is strong"}
                </p>
            </div>
            <ToastContainer style={{borderColor:"black",color:"white"}} />
        </div>
    )
}