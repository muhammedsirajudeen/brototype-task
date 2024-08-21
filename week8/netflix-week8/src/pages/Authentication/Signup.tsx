import { useNavigate } from "react-router-dom"
import styles from "./Login.module.css"
import { ChangeEvent, useContext, useState } from "react"
import NetflixContext from "../../context/NetflixContext"
import validator from "validator"
export default function Signup(){
    const navigate=useNavigate()    
    const [email,setEmail]=useState<string>("")
    const [emailstatus,setEmailstatus]=useState<boolean>(false)
    const [errormessage,setErrormessage]=useState<string>("")
    const context=useContext(NetflixContext)
    console.log(context.app)
    function emailHandler(e:ChangeEvent<HTMLInputElement>){
        setEmail(e.target.value)
        if(!validator.isEmail(e.target.value)){
            setErrormessage("Please enter proper email")
        }else{
            setEmailstatus(true)
            setErrormessage("")
        }
        

    }
    function nextpageHandler(){
        navigate('/create',{state:{email:email}})
    }
    return(
        <div className={` ${styles.maincontainer} h-screen w-screen overflow-x-hidden overflow-y-hidden `} >
                <img src="netflixlogo.svg" className="h-40 w-40 ml-20 " />
                <div className="flex flex-col items-center justify-center mt-30">
                    <h1 className="font-bold text-center text-headingsize text-white">
                    Unlimited movies, TV <br/> shows and more
                    </h1>
                </div>
                <p className="text-white font-normal text-2xl text-center mt-10">
                    Starts at ₹149. Cancel anytime.
                </p>
                <p className="text-white font-light text-sm text-center mt-10">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                <div className="flex items-center justify-center mt-32">
                    <input type="text" className={`bg-specialcolor h-14 w-58 text-white placeholder:text-white p-6 border ${emailstatus ? "focus:outline-green-400" : "" }   `} placeholder="Enter the email..." value={email} onChange={emailHandler}  /> 
                    <button className="flex bg-red-600 text-white h-14 items-center justify-center  p-6 ml-2" onClick={nextpageHandler} >
                        <p className="font-bold">Get Started</p>
                    </button>
                </div>
                <p className="text-sm text-center mt-4 text-red-600 font-bold">{errormessage}</p>

        </div>  
    )
}