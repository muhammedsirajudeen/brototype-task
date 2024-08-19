import { ChangeEvent, ReactElement, useRef, useState } from "react";
import ImageIcon from "../assets/Logos/imageicon.png"

const FuelTypesArray = [
    "CNG & Hybrids",
    "Diesel",
    "Electric",
    "LPG",
    "Petrol"
  ];

const Tranmission=[
    "Automatic",
    "Manual"
]

export default function Post():ReactElement{
    const [brand,setBrand]=useState<string>("")
    const [model,setModel]=useState<string>("")
    const [year,setYear]=useState<string>("")
    const [variant,setVariant]=useState<string>("")
    const [transmission,setTranmission]=useState<string>("")
    const [owners,setOwners]=useState<string>("")
    const [title,setTitle]=useState<string>("") 
    const [description,setDescription]=useState<string>("")
    const [price,setPrice]=useState<string>("")
    const imgCount=useRef<number>(0)
    const fileRef=useRef<HTMLInputElement>(null)
    const fileInput=new FormData()
    function fileHandler(){
        fileRef.current?.click()
    }
    function fileAddHandler(e:ChangeEvent<HTMLInputElement>){
        if(e.target.files){
            const file=e.target.files[0]
            fileInput.append("files",file)
            const reader=new FileReader()
            reader.onloadend=(e)=>{
                const imageElement:HTMLImageElement | null=document.querySelector(`#image${imgCount.current}`)
                if(imageElement){
                    console.log("success")
                    imageElement.src=e.target?.result as string

                }else{
                    alert("some error")
                }
            }
            reader.readAsDataURL(file)
        }
        imgCount.current++
        if(imgCount.current===6){
            imgCount.current=0
        }
    }

    return(
        <div className="flex flex-col items-center justify-center bg-white mt-2 p-10">
            <h1 className="text-2xl font-bold text-borderedgecolor ">POST YOUR AD</h1>
            <div className="w-image h-auto border border-gray-300 flex flex-col p-5">
                <h1 className="text-lg font-bold text-borderedgecolor mt-5">CHOOSE YOUR CATEGORY</h1>
                <h1 className="text-lg font-bold text-borderedgecolor mt-5">INCLUDE SOME DETAILS</h1>
                
                <label className="text-xs text-borderedgecolor mt-4" htmlFor="brand">Brand*</label>
                <input id="brand" type="text" className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs " placeholder="enter the brand" value={brand} onChange={(e)=>setBrand(e.target.value)} />    
                <label className="text-xs text-borderedgecolor mt-4" htmlFor="model">Model*</label>
                <input id="model" type="text" className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs" placeholder="enter the model" value={model} onChange={(e)=>setModel(e.target.value)}/>
                <label className="text-xs text-borderedgecolor mt-4" htmlFor="year">Year*</label>
                <input id="year" type="text" className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs" placeholder="enter the model" value={year} onChange={(e)=>setYear(e.target.value)}/>
                <label className="text-xs text-borderedgecolor mt-4" >Variant*</label>
                <div className="flex   items-center justify-evenly mt-2">

                    {
                        FuelTypesArray.map((type)=>{
                            return(
                                <button key={type} className="p-2 text-borderedgecolor  text-xs flex items-center justify-center h-6 w-auto border border-gray-400 hover:bg-green-300 focus:bg-green-300" onClick={()=>setVariant(type)}  >{type}</button>
                            )
                        })
                    }
                </div>
                <label className="text-xs text-borderedgecolor mt-4" >Tranmission*</label>
                <div className="flex   items-center justify-evenly mt-2">
                    {
                        Tranmission.map((type)=>{
                            return(
                                <button key={type} className="p-2 text-borderedgecolor  text-xs flex items-center justify-center h-6 w-auto border border-gray-400 hover:bg-green-300 focus:bg-green-300 " onClick={()=>setTranmission(type)}  >{type}</button>
                            )
                        })
                    }
                </div>
                <label className="text-xs text-borderedgecolor mt-4" htmlFor="owners">Number of Owners*</label>
                <input id="owners" type="text" className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs" placeholder="enter the model" value={owners} onChange={(e)=>setOwners(e.target.value)}/>
                <label className="text-xs text-borderedgecolor mt-4" htmlFor="title">Ad Title*</label>
                <input id="title" type="text" className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs" placeholder="enter the model" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label className="text-xs text-borderedgecolor mt-4" htmlFor="description">Description*</label>
                <input id="description" type="text" className="w-full h-20 rounded-sm bg-white border border-black placeholder:text-xs" placeholder="enter the model" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <label className="text-xs text-borderedgecolor mt-4" htmlFor="price">Price*</label>
                <input id="price" type="text" className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs" placeholder="enter the model" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                {/* upload image container  */}
                <div className="mb-10 flex flex-col items-start justify-center">
                <h1 className="text-lg text-borderedgecolor mt-5 font-bold">Add Photos</h1>
                <div className="mb-10 flex  items-center flex-wrap justify-center mt-10">
                    <div  className="flex h-20 w-20 m-5  items-center justify-center  border-black bg-black" onClick={fileHandler}  >
                        <img id="image1" src={ImageIcon} className="h-14 w-14"/>
                    </div>
                    <div  className="flex h-20 w-20 m-5 items-center justify-center  border-black bg-black"  onClick={fileHandler}>
                        <img id="image2" src={ImageIcon} className="h-14 w-14"/>
                    </div>
                    <div  className="flex h-20 w-20 m-5 items-center justify-center  border-black bg-black"  onClick={fileHandler}>
                        <img id="image3" src={ImageIcon} className="h-14 w-14"/>
                    </div>
                    <div  className="flex h-20 w-20 m-5 items-center justify-center  border-black bg-black"  onClick={fileHandler}>
                        <img id="image4" src={ImageIcon} className="h-14 w-14"/>
                    </div>
                    <div  className="flex h-20 w-20 m-5 items-center justify-center  border-black bg-black"  onClick={fileHandler}>
                        <img id="image5" src={ImageIcon} className="h-14 w-14"/>
                    </div>
                    <div  className="flex h-20 w-20 m-5 items-center justify-center  border-black bg-black"  onClick={fileHandler}>
                        <img id="image6" src={ImageIcon} className="h-14 w-14"/>
                    </div>
                </div> 
                <input onChange={fileAddHandler} ref={fileRef} type="file" className="hidden h-10 w-full" />
                </div> 
                
            </div>
        </div>
    )
}