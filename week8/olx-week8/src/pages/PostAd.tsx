import { ReactElement, useState } from "react";
import RightArrow from "../assets/Logos/rightarrow.svg"
import { useNavigate } from "react-router-dom";
export default function PostAd():ReactElement{
    const [categories,setCategories]=useState<Array<string>>([""])
    const navigate=useNavigate()
    function categoryHandler(category:string){
        //post add here
        navigate('/post',{state:{category:category}})
    }
    return(
      <div className="flex flex-col items-center justify-center bg-white p-10">
        <h1 className="font-bold text-2xl text-borderedgecolor">POST YOUR AD</h1>
        <div className="grid grid-cols-2 w-image h-auto border border-gray-300 mt-10">
            <div className="flex flex-col items-start justify-center w-full p-4">
                <p className="font-bold text-borderedgecolor">CHOOSE A CATEGORY</p>
                <button className="w-full flex justify-between border border-gray-300 h-12 hover:bg-gray-300 items-center" onClick={()=>setCategories(["car"])} >
                    <p className="font-light text-sm ">Cars</p>
                    <img src={RightArrow} className="h-6 w-6"/>
                </button>
                <button className="w-full flex justify-between border border-gray-300 h-12 hover:bg-gray-300 items-center">
                    <p className="font-light text-sm ">Cars</p>
                    <img src={RightArrow} className="h-6 w-6"/>
                </button>
                <button className="w-full flex justify-between border border-gray-300 h-12 hover:bg-gray-300 items-center">
                    <p className="font-light text-sm ">Cars</p>
                    <img src={RightArrow} className="h-6 w-6"/>
                </button>
                <button className="w-full flex justify-between border border-gray-300 h-12 hover:bg-gray-300 items-center">
                    <p className="font-light text-sm ">Cars</p>
                    <img src={RightArrow} className="h-6 w-6"/>
                </button>
                <button className="w-full flex justify-between border border-gray-300 h-12 hover:bg-gray-300 items-center">
                    <p className="font-light text-sm ">Cars</p>
                    <img src={RightArrow} className="h-6 w-6"/>
                </button>
                <button className="w-full flex justify-between border border-gray-300 h-12 hover:bg-gray-300 items-center">
                    <p className="font-light text-sm ">Cars</p>
                    <img src={RightArrow} className="h-6 w-6"/>
                </button>
            </div>   
            <div className="w-full">
                {categories.map((category)=>{
                    return(
                        <button key={category} className="w-full flex justify-between border border-gray-300 h-12 hover:bg-gray-300 items-center mt-10" onClick={()=>categoryHandler(category)} >
                            <p className="font-light text-sm ">{category}</p>
                        </button> 
    
                    )
                })}
            </div>
        </div>
      </div>
    )
}