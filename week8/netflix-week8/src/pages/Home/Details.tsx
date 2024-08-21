import { ReactElement, useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseHelper";
export default function Details():ReactElement{
    const {state}=useLocation()
    const navigate=useNavigate()
    const [loading,setLoading]=useState<boolean>(true)
    console.log(state)
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
      useEffect(()=>{
        if(state) setLoading(false)
      },[state])
    function navHandler(){
        navigate('/watch',{state:{movie:state.movie}})
    }
    return(
        <>
        {
            loading ? <></>:
            <div className="h-auto w-screen bg-specialcolor overflow-y-hidden">
            <NavBar/>
                <div className="flex flex-col items-center justify-center m-20 mb-5">
                    <div className="flex items-center justify-center">
                        <img className="image-max"   src={"https://image.tmdb.org/t/p/w500/"+state?.movie.poster_path}/>
                    </div>
                    
                </div>
                <div className="flex flex-col items-center justify-center mb-10 ">
                    <p className="font-bold text-3xl text-white">{state.movie.original_title}</p>
                    <p className="text-sm w-96 text-center text-white font-light">{state?.movie.overview}</p>
                    <p className="font-bold text-xl mt-2 text-yellow-600">{state?.movie.vote_average}</p>
                    <button className="flex bg-black rounded-lg font-bold mt-10 items-center justify-center p-5" onClick={navHandler} >
                        <img src="play.png" className="h-10 w-10"/>
                        <p className="font-bold text-lg  text-white">Play Now</p>
                    </button>
                </div>
            </div>
        }
        </>
    )
}