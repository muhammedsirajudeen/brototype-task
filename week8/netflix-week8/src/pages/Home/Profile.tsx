import { ReactElement, useContext, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseHelper";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import NetflixContext from "../../context/NetflixContext";

export default function Profile():ReactElement{
    const navigate=useNavigate()
    const context=useContext(NetflixContext)
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          if(!user){
            navigate('/')
            // setUser(user)
            // setAuthentication(true)
            // setUsername(user.email??"")
            // setProfileimage(user.photoURL ?? "")
    
          }else{
            console.log("user not found")
          }
        })
      },[navigate])
    async function signoutHandler(){
        try{
            await signOut(auth)
            toast("logout successfully")
            setTimeout(()=>navigate('/'),2000)
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div className="h-screen w-screen flex items-center justify-start flex-col bg-specialcolor">
            <NavBar/>

            <div className="h-96 flex flex-col w-96  items-center justify-start bg-white mt-52 rounded-lg">
                <img src="user.png" className="rounded-full w-20 h-20 mt-10 border border-black"/>
                <h1 className="text-sm text-black font-semibold mt-10">{context.user?.email}</h1>
                <button className="bg-red-600 text-white font-light p-2 mt-10" onClick={signoutHandler} >
                    Sign Out
                </button>
            </div>
            <ToastContainer/>
        </div>
    )
}