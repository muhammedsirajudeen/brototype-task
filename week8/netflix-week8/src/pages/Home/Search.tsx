import { ChangeEvent, ReactElement, useEffect, useRef, useState } from "react";
import NavBar from "../../components/NavBar";
import MovieLister from "../../components/MovieLister";
import { toast, ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebaseHelper";
import { useNavigate } from "react-router-dom";

function queryInjector(id:string):string{
    const url = `https://api.themoviedb.org/3/search/movie?query=${id}&include_adult=false&language=en-US&page=1`;
    return url
}

export default function Search():ReactElement{
    const [search,setSearch]=useState<string>("")
    const [state,setState]=useState<boolean>(false)
    const [url,setUrl]=useState<string>("")
    const initialRender=useRef<number>(0)
    const navigate=useNavigate()
    useEffect(()=>{
        initialRender.current++
        
    },[])
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
    function submitHandler(){

            if(search.length<5 || search.trim()==="" ){
                toast("enter proper search")
            }else{
                // setResult(result)
                setUrl(queryInjector(search))
                setState(true)
            }
    }
    function searchHandler(e:ChangeEvent<HTMLInputElement>){
        setSearch(e.target.value)
        if(initialRender.current!==0 && e.target.value.length===0 ){
            window.location.reload()
        }
    }
    return(
        <div className="flex flex-col items-center justify-start w-screen h-screen bg-specialcolor">
            <NavBar/>
            <div className="flex items-center justify-center bg-white mt-20 shadow-xl rounded-lg ">
                <input type="text" value={search} onChange={searchHandler} className="h-10 w-96 rounded-lg" placeholder="search your favorite movie" />
                <div className="h-full w-10 flex items-center justify-center bg-black rounded-md">
                    <img src="search.png" className="h-6 w-6 bg-black" onClick={submitHandler} />

                </div>
            </div>
            {state && <MovieLister title="Search Results" url={url} />}
            <ToastContainer/>
        </div>
    )
}