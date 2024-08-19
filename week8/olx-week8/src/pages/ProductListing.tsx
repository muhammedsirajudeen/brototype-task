import { DocumentData } from "firebase/firestore";
import { ReactElement, useEffect , useState } from "react";
import { useLocation } from "react-router-dom";
import RightArrow from "../assets/Logos/rightarrow.svg"
import ProfileImage from "../assets/Logos/ProfileImage.png"
import ShareImage from "../assets/Logos/share.png"
import FavoriteImage from "../assets/Logos/fav.svg"
export default function ProductListing():ReactElement{
    const [product,setProduct]=useState<DocumentData | null>()
    const [profile,setProfile]=useState<string | null>(null)
    const [chatdialog,setchatDialog]=useState<boolean>(false)
    const [message,setMessage]=useState<string>("")
    const location=useLocation()
        
    useEffect(()=>{
        const product=location.state
        setProduct(product)
    },[location.state])
    function profileHandler(profile:string|null){
        if(profile){
            console.log(profile)
        }
    }
    function chatHandler(profile:string | null){
        if(profile){
            setProfile(profile)
            setchatDialog(true)

            
        }
    }
    function messageHandler(message:string){
        console.log(message)
        alert(message)
    }
    function shareHandler(){
        alert("share handler")
    }
    function favHandler(){
        alert("fav clicked")
    }
    return(
        <>
            <div className="flex items-start justify-center mt-10 bg-navbarcolor">
                <div className="w-3/4 flex-col flex items-center justify-center">
                    <img src={product?.Images[0]} className="w-image h-96" />
                    <div className="w-image p-2 shadow-lg bg-white items-center justify-evenly mt-10 flex">
                        {
                        product?.Images.map((image:string)=>{
                            return(
                                <img key={image} className="h-20 w-20 border border-black" src={image} />
                            )
                        })}
                    </div>
                    <div className="flex flex-col border border-gray-400 w-image bg-white mt-10">
                        <h1 className="text-xl font-bold text-borderedgecolor m-5">Details</h1>
                        <div className="ml-5 grid grid-cols-2 items-center justify-center">
                            <div className="flex flex-col items-start  justify-center">
                                <p className="text-sm font-light mt-2">Brand {product?.ProductName}</p>
                                <p className="text-sm font-light mt-2">Year {product?.PostingDate}</p>
                            </div>
                            <div className="ml-5 flex flex-col items-start  justify-center">
                                <p className="text-sm font-light mt-2">Model {product?.Model}</p>
                                <p className="text-sm font-light mt-2">Kilometers {product?.Kilometers}</p>
                            </div>
                        </div>

                        <h1 className="text-xl font-bold text-borderedgecolor m-5" >Description</h1>
                        <p className="ml-5 font-light text-sm">{product?.Description}</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col items-start justify-start">
                    <div className="bg-white w-96  h-auto shadow-lg border border-gray-400 p-2">
                        <div className="flex items-center justify-start">
                            <p className="font-bold text-3xl m-5 text-borderedgecolor">₹ {product?.Price}</p>
                            <img src={ShareImage} className="h-6 w-6 ml-20" onClick={shareHandler} />
                            <img src={FavoriteImage} className="h-6 w-6 ml-20" onClick={favHandler} />

                        </div>
                        <p className="font-light text-sm ml-5 mt-2">{product?.PostingDate}</p>
                        <p className="font-light text-sm ml-5 mt-2">{product?.Kilometers ? "Kilometeres"+"  "+product?.Kilometers : "" } </p>
                        <p className="font-light text-sm ml-5 mt-2">{product?.LocationName}</p>
                    </div>

                    <div className="bg-white w-96 mt-10 h-auto shadow-lg border border-gray-400 p-2">
                        <div className="flex items-center justify-start">
                            <p className="font-bold text-3xl m-5 text-borderedgecolor">{product?.Username}</p>
                            <img src={RightArrow} className="h-6 w-6" onClick={()=>profileHandler(product?.Username)} />
                        </div>
                        <button className="w-full p-2 h-max border border-borderedgecolor">
                            <p className="font-bold text-borderedgecolor text-sm" onClick={()=>chatHandler(product?.Username)} >Chat With Seller</p>
                        </button>
                    </div>

                    <div className="bg-white w-96 mt-10 h-auto shadow-lg border border-gray-400 p-2">
                        <div className="flex items-center flex-col justify-between">
                            <p className="font-bold text-xl mt-2 text-borderedgecolor">Posted In</p>
                            <p className="font-light m-5">{product?.LocationName}</p>
                        </div>
                    </div>
                    {/* <MapComponent/> */}
                </div>
            </div>
            
            {
                chatdialog &&
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white h-96 w-96 p-4 flex items-center justify-start flex-col rounded shadow-lg">
                        <button onClick={()=>{
                            setchatDialog(false)
                        }}>X</button>
                        <img src={ProfileImage} className="h-10 w-10 mt-10"/>
                        <h1 className="text-xl font-bold text-borderedgecolor mt-10">Send Message To {profile}</h1>
                        <input type="text" className="w-72 border border-t-white border-l-white border-r-white border-b-black mt-10" placeholder="write your message here" value={message} onChange={(e)=>setMessage(e.target.value)} />
                        <button className="w-72 mt-10 bg-borderedgecolor h-10 font-bold text-white" onClick={()=>messageHandler(message)} >Send Message</button>
                    </div>
                </div>
            }
            
        </>
    )
}