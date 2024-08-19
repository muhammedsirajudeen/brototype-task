import { ReactElement, useContext,useState,useEffect } from "react";
import OlxContext from "../context/OlxContext";
import TopBar from "../components/TopBar";
import CategoryBox from "../components/CategoryBox";
import ProfileImage from "../assets/Logos/ProfileImage.png"
import ListLogo from "../assets/Logos/listinglogo.webp"
import {auth} from "../firebaseHelper/firebaseHelper"
import { onAuthStateChanged, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export default function Profile():ReactElement{
    const context=useContext(OlxContext)
    const [dialog, setDialog] = useState<boolean>(false)
    const [user,setUser]=useState<User>()
    const navigate=useNavigate()
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          if(user){
            console.log(user)
            setUser(user)
            // setAuthentication(true)
            // setUsername(user.email??"")
          }else{
            console.log("user not found")
            navigate('/')
          }
        })
      },[navigate])
    function editHandler(){
        alert("edit clicked")
    }
    function shareHandler(){
        alert("share clicked")
    }
    function sellHandler(){
        alert("sell clicked")

    }
    return(
        <>
        <TopBar setDialog={setDialog} />
        {dialog && <CategoryBox />}

        <div className="grid grid-cols-2 items-center justify-center bg-white p-20">
            <div className="flex w-full flex-col items-center justify-center">
                <img src={ProfileImage} className="h-20 w-20"/>
                <h1 className="font-bold text-xl text-borderedgecolor mt-5">{context?.username}</h1> 
                <p className="text-xs mt-5">Member since {user?.metadata.creationTime} </p>
                <div className="flex items-center justify-evenly mt-10">
                    <p className="text-xs ">0 followers</p>
                    <p className="text-xs ml-5">0 following</p>
                </div>
                <p className="font-bold text-xs mt-5">Email {user?.emailVerified? "" : "Not" } Verified</p>
                <button className="flex items-center justify-center bg-borderedgecolor p-2 w-72 mt-5 text-white font-bold" onClick={editHandler} >Edit Profile</button>
                <button className="border border-borderedgecolor border-t-white border-l-white border-r-white text-borderedgecolor font-bold mt-5" onClick={shareHandler} >Share Profile</button>
            </div>
            {/* have to check dynamically based on listing */}
            <div className="flex w-full flex-col items-center justify-center">
                <img src={ListLogo} className="h-40 w-40"/>
                <p className="font-bold text-lg text-borderedgecolor mt-5">You havent listed anything</p>
                <p className="font-light text-sm text-borderedgecolor mt-5">Let go of what you dont use Anymore</p>

                <button className="flex items-center justify-center bg-borderedgecolor p-2 w-72 mt-5 text-white font-bold" onClick={sellHandler} >Start Selling</button>
                
            </div>

        </div>
        {/* footer contianer here */}

        <div className="mt-20 grid grid-cols-5 items-start justify-center">
                <div className="flex flex-col items-start ml-10 justify-start">
                    <h1 className="font-xl font-bold text-borderedgecolor">Popular Locations</h1>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>

                </div>
                <div className="flex flex-col items-start ml-5 justify-start">
                    <h1 className="font-xl font-bold text-borderedgecolor">Trending Locations</h1>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                </div>
                <div className="flex flex-col items-start ml-5 justify-start">
                    <h1 className="font-xl font-bold text-borderedgecolor">About Us</h1>
                    <p className="text-xs text-borderedgecolor mt-1">Tech@OLX</p>
                </div>
                <div className="flex flex-col items-start ml-5 justify-start">
                    <h1 className="font-xl font-bold text-borderedgecolor">OLX</h1>
                    <p className="text-xs text-borderedgecolor mt-1">Blog</p>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                </div>
                <div className="flex flex-col items-start ml-5 justify-start">
                    <h1 className="font-xl font-bold text-borderedgecolor">FOLLOW US</h1>
                    {/* add logo and details here */}
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                    <p className="text-xs text-borderedgecolor mt-1">Kolkata</p>
                </div>

            </div>
        </>
    )
}