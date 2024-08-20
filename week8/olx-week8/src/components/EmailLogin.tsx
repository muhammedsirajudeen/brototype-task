import { Dispatch, ReactElement, SetStateAction, useContext, useState } from "react";
import OlxImage from "../assets/Logos/olx.svg"
import LeftArrow from "../assets/Logos/leftarrow.png"

// import firebase from "firebase/compat/app";
import {auth} from "../firebaseHelper/firebaseHelper"
import { signInWithEmailAndPassword } from "firebase/auth";
import OlxContext from "../context/OlxContext";
export default function EmailLogin({setLoginpage}:{setLoginpage:Dispatch<SetStateAction<string>>}):ReactElement{
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState("")
    const [errormessage,setErrormessage]=useState<string>("")
    const [successmessage,setSuccessmessage]=useState<string>("")
    const context=useContext(OlxContext)
    function navHandler(page:string){
        setLoginpage(page)
    }
    function verifyHandler(){
        //add validation here        
        // if(email==="" || phone.length<10){
        //     alert("enter full number")
        // }else{
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user
              console.log(user);
              setSuccessmessage("login successful")
              context?.setAuthentication(true)
              context?.setUsername(user.email ?? "")
              context?.setLogindialog(false)
            //   alert("success")
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode)
              console.log(errorMessage)
              setErrormessage("login failed")
            });       
        // }
    }
    return(
        <>
        <div className='flex items-center justify-between'>
          <img src={LeftArrow} className="h-6 w-6 " onClick={()=>navHandler("home")} />

          <img src={OlxImage} className="h-20 w-20 "/>

        </div>
        <p className='font mt-2 font-bold text-sm text-borderedgecolor'>
          Login With Mobile Number
        </p>
        <input type="email" className=" border border-borderedgecolor mt-10 p-3 w-full" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className=" border border-borderedgecolor mt-10 p-3 w-full" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button onClick={verifyHandler} className='flex border-2 p-2 justify-center mt-10 font-bold text-borderedgecolor w-full border-borderedgecolor ' >
          Next
        </button>
        <p className="text-xs text-green-600">{successmessage}</p>
        <p className="text-xs text-red-700">{errormessage}</p>
        <p className='text-xs text-gray-400 flex items-center justify-center font-light'>
          Your contact number is never shared with external parties nor do we use it to spam you in any way.
        </p>
        {/* <p className='font-bold text-xs mt-10'>Or</p> */}
        {/* <button className='border border-t-white border-r-white border-l-white mt-5 font-bold  border-b-black' onClick={emailLoginHandler} >Next</button> */}
        {/* <button className="w-72 mt-10 bg-borderedgecolor h-10 font-bold text-white" onClick={()=>messageHandler(message)} >Login</button> */}
        <div id="recaptcha-container"></div>
    </>
    )
}