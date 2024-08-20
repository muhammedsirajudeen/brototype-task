import { ReactElement, useContext,useState,useEffect, useRef, FormEvent } from "react";
import OlxContext from "../context/OlxContext";
import TopBar from "../components/TopBar";
import CategoryBox from "../components/CategoryBox";
import ProfileImage from "../assets/Logos/ProfileImage.png"
import ListLogo from "../assets/Logos/listinglogo.webp"
import app, {auth} from "../firebaseHelper/firebaseHelper"
import { onAuthStateChanged, User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, DocumentData, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"

import DeleteImage from "../assets/Logos/DeleteImage.png"
import EditImage from "../assets/Logos/EditImage.png"
export default function Profile():ReactElement{
    const context=useContext(OlxContext)
    const {toast}=useToast()
    const [dialog, setDialog] = useState<boolean>(false)
    const [user,setUser]=useState<User>()
    const [products,setProducts]=useState<Array<DocumentData>>([])
    const [loading,setLoading]=useState<boolean>(true)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [open,_]=useState<boolean>(false)
    const dialogRef=useRef<HTMLDialogElement>(null)
    const [dialogcontext,setDialogcontext]=useState<string>("")
    const [currentproduct,setCurrentproduct]=useState<DocumentData>()
    const formRef=useRef<HTMLFormElement>(null)
    const navigate=useNavigate()
    const db = getFirestore(app)

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
      useEffect(() => {
        const username=context?.username
        if(username){
            async function getData() {
                const db = getFirestore(app)
                const productRef=collection(db,"Products")
                const q = query(productRef,where("Username","==",username))
                const querySnapshot=await getDocs(q)
                const products:Array<DocumentData>=[]
                querySnapshot.forEach((doc)=>{
                    const data=doc.data()
                    data.id=doc.id
                    products.push(data)
                })
                setProducts(products)
                console.table(products)
                setLoading(false)
                
              }
              getData()
      
        }
      }, [context?.username])
    
    function editHandler(){
        alert("edit clicked")
    }
    function shareHandler(){
        alert("share clicked")
    }
    function sellHandler(){
        navigate('/post')
    }
    function producteditHandler(product:DocumentData){
        dialogRef.current?.show()
        setCurrentproduct(product)
        setDialogcontext("edit")
        console.log(product.id)
    }
    function deleteHandler(product:DocumentData){
        dialogRef.current?.show()
        setDialogcontext("delete")
        setCurrentproduct(product)
        console.log(product.id)
    }
    function submiteditHandler(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        const formElement=e.target as HTMLFormElement
        console.log(formElement.ProductName.value)
        const productRef = doc(db, "Products", formElement.idField.value);
        if(formElement.ProductName.value.length===0 || 
            formElement.LocationName.value.length===0 ||
            formElement.Kilometers.value.length===0 ||
            formElement.Model.value.length===0 ||
            formElement.OwnerChain.value.length===0 ||
            formElement.Price.value.length===0 ||
            formElement.Transmission.value.length===0 ||
            formElement.Variant.value.length===0
        ){
                        
            toast({
                color:"black",
                style:{color:"white",backgroundColor:"black"},
                variant:"destructive",
                title: "Check Entered Details",
                description: "Check your entered details",

              })
              return

        }
        updateDoc(productRef, {
             ProductName: formElement.ProductName.value ,
             LocationName:formElement.LocationName.value,
             Kilometers:formElement.Kilometers.value,
             Model:formElement.Model.value,
             OwnerChain:formElement.OwnerChain.value,
             Price:formElement.Price.value,
             Transmission:formElement.Transmission.value,
             Variant:formElement.Variant.value,

              })
          .then(() => {
            console.log('Document updated successfully')
            
            toast({
                color:"black",
                style:{color:"white",backgroundColor:"black"},
                variant:"destructive",
                title: "Edited Successfully",
                description: "Your Edits are Successful",

              })
            dialogRef.current?.close()
            setTimeout(() => {
                window.location.reload()
            }, 1000);
              
          })
          .catch((error: Error) => {
            console.error('Error updating document:  ', error)
            toast({
                style:{color:"white",backgroundColor:"red",fontWeight:900},
                variant:"destructive",
                title: "Edited Successfully",
                description: "Your Edits are Successful",

              })
          })

    }
    async function actualdeleteHandler(){
        const id=currentproduct?.id
        console.log(id)
        try{
            await deleteDoc(doc(db, "Products", id));
            toast({
                style:{color:"white",backgroundColor:"red",fontWeight:900},
                variant:"destructive",
                title: "Deleted Successfully",
                description: "Your Edits are Successful",

              })
              setTimeout(()=>window.location.reload(),1000)
        }catch(error){
            console.log(error)
            toast({
                style:{color:"white",backgroundColor:"red",fontWeight:900},
                variant:"destructive",
                title: "Some error Happened",
                description: "Please try again",

              }) 
        }
    }
    return(
        <>
        <Toaster/>
    

        <TopBar setDialog={setDialog} />
        {dialog && <CategoryBox />}
        {/* dialog */}
        <dialog className="bg-white shadow-2xl border border-black w-96 h-96 mt-20 rounded-lg overflow-y-scroll" open={open} ref={dialogRef} >
                <button className="font-bold text-lg w-full flex items-center justify-center mt-2" onClick={()=>dialogRef.current?.close()} >x</button>
                {dialogcontext === "edit" ?
                    <div className="flex flex-col items-center justify-center">
                        <form className="flex flex-col items-start justify-center" onSubmit={submiteditHandler} ref={formRef} >
                            <input type="hidden" value={currentproduct?.id} name="idField" />
                            <label className="text-borderedgecolor text-xs" htmlFor="productname">Product Name*</label>
                            <input id="productname" type="text" name="ProductName" className="h-8 w-3/4 border border-black mt-2" placeholder="Product Name" defaultValue={currentproduct?.ProductName} />

                            <label className="text-borderedgecolor text-xs mt-4" htmlFor="location">Location Name*</label>
                            <input id="location" type="text" name="LocationName" className="h-8 w-3/4 border border-black " placeholder="Location Name" defaultValue={currentproduct?.LocationName}/>

                            <label className="text-borderedgecolor text-xs mt-4" htmlFor="kilometers">Kilometers*</label>
                            <input id="kilometers" type="text" name="Kilometers" className="h-8 w-3/4 border border-black " placeholder="Kilometers" defaultValue={currentproduct?.Kilometers}/>
                            
                            <label className="text-borderedgecolor text-xs mt-4" htmlFor="model">Model*</label>                            
                            <input id="model" type="text" name="Model" className="h-8 w-3/4 border border-black " placeholder="Enter the model" defaultValue={currentproduct?.Model}/>

                            <label className="text-borderedgecolor text-xs mt-4" htmlFor="owner">Owner Chain*</label>                            
                            <input id="owner" type="text" name="OwnerChain" className="h-8 w-3/4 border border-black " placeholder="Enter the model" defaultValue={currentproduct?.OwnerChain}/>

                            <label className="text-borderedgecolor text-xs mt-4" htmlFor="price">Price*</label>                            
                            <input id="price" type="number" name="Price" className="h-8 w-3/4 border border-black " placeholder="Enter the price" defaultValue={currentproduct?.Price}/>

                            <label className="text-borderedgecolor text-xs mt-4" htmlFor="transmission">Transmission*</label>                            
                            <input id="transmission" type="text" name="Transmission" className="h-8 w-3/4 border border-black " placeholder="Enter the price" defaultValue={currentproduct?.Transmission}/>

                            <label className="text-borderedgecolor text-xs mt-4" htmlFor="variant">Variant*</label>                            
                            <input id="variant" type="text" name="Variant" className="h-8 w-3/4 border border-black " placeholder="Enter the price" defaultValue={currentproduct?.Variant}/>

                            <button type="submit" className="bg-borderedgecolor text-white font-bold text-xs m-10 p-3">Edit</button>
                        </form>

                    </div>
                        :
                    <>
                        <h1 className="font-bold text-xs text-center mt-10">Do you wanna Delete {currentproduct?.id}</h1>
                        <div className="flex items-center justify-center h-full  w-full">
                            <button className="bg-white border border-black text-black p-2 font-bold " onClick={()=>dialogRef.current?.close()} >Cancel</button>

                            <button className="bg-red-600 text-white font-bold p-2 ml-10" onClick={actualdeleteHandler}>Delete</button>
                        </div>
                    </>
                }
                
        </dialog>
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
            {(loading) &&
             <>
                <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex items-center w-full justify-start">
                        <div className="skeleton-loader w-32 h-20"></div>
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="skeleton-loader w-full ml-20 h-10"></div>
                            <div className="skeleton-loader mt-2 w-full ml-20 h-10"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-evenly w-full">
                        <div className=" mt-10 w-20 h-10 skeleton-loader"></div> 
                        <div className=" mt-10 w-20 h-10 skeleton-loader"></div> 

                    </div>
                </div>
             </> 
            } 
            {
                (products.length>0 && !loading) &&
                <div className="flex flex-col items-start justify-start overflow-y-scroll h-96 w-full">
                    <h1 className="text-xl text-borderedgecolor font-bold">YOUR LISTINGS</h1>
                    {products.map((product)=>{
                        return(
                            <div key={product.id} className="flex flex-col items-start justify-start mt-14 border border-borderedgecolor p-2">
                                <div className="flex w-full items-start justify-start">
                                    <div className="w-1/2">
                                        <img src={product.Images[0]} className="w-16 h-16 rounded-full"/>
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-1/2">
                                        <p className="font-bold text-xs">{product.ProductName}</p>
                                        <div className="font-light text-xs">{product.Description}</div>
                                    </div>
                                </div>
                                <div className="font-light text-xs">{product.PostingDate}</div>
                                
                                <div className="flex items-center justify-between w-full  mt-2">
                                    <button className="p-2 rounded-xl bg-black flex items-center justify-center" onClick={()=>deleteHandler(product)}>
                                        <img src={DeleteImage} className="h-6 w-6"  />
                                    </button>
                                    <button className="p-2 rounded-xl bg-black flex items-center justify-center" onClick={()=>producteditHandler(product)}>
                                        <img src={EditImage} className="h-6 w-6"  />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {
                (products.length===0 && !loading) &&
                <>
                <img src={ListLogo} className="h-40 w-40"/>
                <p className="font-bold text-lg text-borderedgecolor mt-5">You havent listed anything</p>
                <p className="font-light text-sm text-borderedgecolor mt-5">Let go of what you dont use Anymore</p>    
                <button className="flex items-center justify-center bg-borderedgecolor p-2 w-72 mt-5 text-white font-bold" onClick={sellHandler} >Start Selling</button>
                </>
            }

                
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