import { ChangeEvent, FormEvent, ReactElement, useContext, useEffect, useRef, useState } from "react";
import { getStorage, ref, getDownloadURL, UploadTaskSnapshot, uploadBytesResumable } from 'firebase/storage';
import ClipLoader from "react-spinners/ClipLoader";

import ImageIcon from "../assets/Logos/imageicon.png"
import { validationHelper } from "../helper/validationHelper"
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../firebaseHelper/firebaseHelper";
import OlxContext from "../context/OlxContext";
import { useNavigate } from "react-router-dom";
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

interface errorProps{
    brandError:string,
    modelError:string,
    yearError:string,
    ownersError:string,
    titleError:string,
    descriptionError:string,
    priceError:string,
    kilometersError:string,
    locationError:string,
    imageError:string

}

export default function Post():ReactElement{
    const context=useContext(OlxContext)
    const [brand,setBrand]=useState<string>("")
    const [model,setModel]=useState<string>("")
    const [year,setYear]=useState<string>("")
    const [variant,setVariant]=useState<string>("")
    const [transmission,setTranmission]=useState<string>("")
    const [owners,setOwners]=useState<string>("")
    const [title,setTitle]=useState<string>("") 
    const [description,setDescription]=useState<string>("")
    const [price,setPrice]=useState<string>("")
    const [kilometers,setKilometers]=useState<string>("")
    const [location,setLocation]=useState<string>("")
    const [loading,setLoading]=useState<boolean>(false)
    const navigate=useNavigate()
    const imgCount=useRef<number>(0)
    const fileRef=useRef<HTMLInputElement>(null)
    //link to the uploaded path
    const downloadArray:Array<string>=[]
    useEffect(()=>{
        if(!context?.username){navigate('/')}
    },[context?.username,navigate])
    const [errors,setErrors]=useState<errorProps>(
        {
            brandError:"",
            modelError:"",
            yearError:"",
            ownersError:"",
            titleError:"",
            descriptionError:"",
            priceError:"",
            kilometersError:"",
            locationError:"",
            imageError:""

        }
    )

    const fileInput=useRef<FormData>(new FormData())
    function fileHandler(){
        fileRef.current?.click()
    }
    function fileAddHandler(e:ChangeEvent<HTMLInputElement>){
        if(e.target.files){
            const file=e.target.files[0]
            fileInput.current.append("files",file)
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
    function postHandler(e:FormEvent<HTMLFormElement>)
    {
        setLoading(true)
        e.preventDefault()
        const brandError=validationHelper(brand)
        const modelError=validationHelper(model)
        // const yearError=validationHelper(year)
        const ownersError=validationHelper(owners)
        const titleError=validationHelper(title)
        const descriptionError=validationHelper(description)
        // const priceError=validationHelper(price)
        // const kilometersError=validationHelper(kilometers)
        const locationError=validationHelper(location)
        setErrors((prev) => ({
          ...prev,
          brandError: brandError,
          modelError: modelError,
        //   yearError: yearError,
          ownersError: ownersError,
          titleError: titleError,
          descriptionError: descriptionError,
        //   priceError: priceError,
        //   kilometersError:kilometersError,
          locationError:locationError
        }))


        if (
          brandError ||
          modelError ||
        //   yearError ||
          ownersError ||
          titleError ||
          descriptionError ||
        //   priceError ||
        //   kilometersError ||
          locationError
        ) {
          alert('check data')
          setLoading(false)
          return
        }


        
        const files=fileInput.current.getAll("files")
        // console.log(files)
        const storage = getStorage();
        const length=files.length
        alert(length)
        if(length<2){
            
            setErrors((prev)=>({...prev,imageError:"select atleast 2 images"}))
            setLoading(false)
            return
        } 

        let count=0

        files.forEach((file)=>{
            const fileAssert=file as File
            const storageRef = ref(storage, fileAssert.name); // Replace with your desired path

            const uploadTask = uploadBytesResumable(storageRef, fileAssert);
            
            uploadTask.on(
              'state_changed',
              (snapshot: UploadTaskSnapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log(progress)
                //   setUploadProgress(progress);
              },
              (err: Error) => {
                //   setError(err);
                    console.error('Error uploading file:', err)
              },
              async () => {
                try {
                  const downloadURL = await getDownloadURL(
                    uploadTask.snapshot.ref
                  )
                  console.log('File available at', downloadURL)
                  downloadArray.push(downloadURL)
                  count++
                  console.log(count,length)
                  if(length===count){
                    setLoading(false);
                    const doc=await addDocFirebase();
                    console.log(doc)
                    window.location.reload()

                }

                  // You can optionally reset state here (file, uploadProgress, error)
                } catch (err) {
                  // setError(err);
                  console.error('Error getting download URL:', err)
                }
              }
            )
        })

    }
    async function addDocFirebase(){
        const db = getFirestore(app);
        const myCollection = collection(db, 'Products');
        const username=context?.username
        //get way to get current location if possible add location data here 
        const data={
            Images:downloadArray,
            Description:description,
            Kilometers:kilometers,
            // Location:
            LocationName:location,
            Model:model,
            OwnerChain:owners,
            PostingDate:(new Date()).toString(),
            Price:price,
            ProductCategory:"Car",
            ProductName:title,
            Transmission:transmission,
            Variant:variant,
            Username:username
        }
        return new Promise((resolve,rejected)=>{
            addDoc(myCollection,data).then((doc)=>{
                console.log("successfully added",doc.id)
                resolve("success")
            }).catch((error)=>{
                console.log(error)
                rejected("error")
            })
        })


    }

    return (
      <div className="flex flex-col items-center justify-center bg-white mt-2 p-10">
        <h1 className="text-2xl font-bold text-borderedgecolor ">
          POST YOUR AD
        </h1>
        <div className="w-image h-auto border border-gray-300 flex flex-col p-5">
          <form className="flex flex-col" onSubmit={postHandler}>
            <h1 className="text-lg font-bold text-borderedgecolor mt-5">
              CHOOSE YOUR CATEGORY
            </h1>
            <h1 className="text-lg font-bold text-borderedgecolor mt-5">
              INCLUDE SOME DETAILS
            </h1>

            <label
              className="text-xs text-borderedgecolor mt-4"
              htmlFor="brand"
            >
              Brand*
            </label>
            <input
              id="brand"
              type="text"
              className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs "
              placeholder="enter the brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <p className="text-xs text-red-700">{errors.brandError}</p>

            <label
              className="text-xs text-borderedgecolor mt-4"
              htmlFor="model"
            >
              Model*
            </label>
            <input
              id="model"
              type="text"
              className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs"
              placeholder="enter the model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <p className="text-xs text-red-700">{errors.modelError}</p>

            <label className="text-xs text-borderedgecolor mt-4" htmlFor="year">
              Year*
            </label>
            <input
              id="year"
              type="number"
              className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs"
              placeholder="enter the model"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <p className="text-xs text-red-700">{errors.yearError}</p>

            <label className="text-xs text-borderedgecolor mt-4">
              Variant*
            </label>
            <div className="flex   items-center justify-evenly mt-2">
              {FuelTypesArray.map((type) => {
                return (
                  <button
                    type="button"
                    key={type}
                    className="p-2 text-borderedgecolor  text-xs flex items-center justify-center h-6 w-auto border border-gray-400 hover:bg-green-300 focus:bg-green-300"
                    onClick={() => setVariant(type)}
                  >
                    {type}
                  </button>
                )
              })}
            </div>
            <label className="text-xs text-borderedgecolor mt-4">
              Tranmission*
            </label>
            <div className="flex   items-center justify-evenly mt-2">
              {Tranmission.map((type) => {
                return (
                  <button type="button"
                    key={type}
                    className="p-2 text-borderedgecolor  text-xs flex items-center justify-center h-6 w-auto border border-gray-400 hover:bg-green-300  focus:bg-green-300 "
                    onClick={(e) =>{setTranmission(type);e.stopPropagation()} }
                  >
                    {type}
                  </button>
                )
              })}
            </div>

            <label
              className="text-xs text-borderedgecolor mt-4"
              htmlFor="owners"
            >
              Number of Owners*
            </label>
            <input
              id="owners"
              type="text"
              className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs"
              placeholder="enter the model"
              value={owners}
              onChange={(e) => setOwners(e.target.value)}
            />
            <p className="text-xs text-red-700">{errors.ownersError}</p>

            <label
              className="text-xs text-borderedgecolor mt-4"
              htmlFor="title"
            >
              Ad Title*
            </label>
            <input
              id="title"
              type="text"
              className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs"
              placeholder="enter the model"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p className="text-xs text-red-700">{errors.titleError}</p>

            <label
              className="text-xs text-borderedgecolor mt-4"
              htmlFor="description"
            >
              Description*
            </label>
            <input
              id="description"
              type="text"
              className="w-full h-20 rounded-sm bg-white border border-black placeholder:text-xs"
              placeholder="enter the model"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="text-xs text-red-700">{errors.descriptionError}</p>

            <label
              className="text-xs text-borderedgecolor mt-4"
              htmlFor="price"
            >
              Price*
            </label>
            <input
              id="price"
              type="text"
              className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs"
              placeholder="enter the model"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <p className="text-xs text-red-700">{errors.priceError}</p>

            <label
              className="text-xs text-borderedgecolor mt-4"
              htmlFor="kilometers"
            >
              Kilometers*
            </label>
            <input
              id="kilometers"
              type="text"
              className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs"
              placeholder="enter the model"
              value={kilometers}
              onChange={(e) => setKilometers(e.target.value)}
            />
            <p className="text-xs text-red-700">{errors.kilometersError}</p>

            {/* upload image container  */}
            <div className="mb-10 flex flex-col items-start justify-center">
              <h1 className="text-lg text-borderedgecolor mt-5 font-bold">
                Add Photos
              </h1>
              <div className="mb-10 flex  items-center flex-wrap justify-center mt-10">
                <div
                  className="flex h-20 w-20 m-5  items-center justify-center  border-black bg-black"
                  onClick={fileHandler}
                >
                  <img id="image1" src={ImageIcon} className="h-14 w-14" />
                </div>
                <div
                  className="flex h-20 w-20 m-5 items-center justify-center  border-black bg-black"
                  onClick={fileHandler}
                >
                  <img id="image2" src={ImageIcon} className="h-14 w-14" />
                </div>
                <div
                  className="flex h-20 w-20 m-5 items-center justify-center  border-black bg-black"
                  onClick={fileHandler}
                >
                  <img id="image3" src={ImageIcon} className="h-14 w-14" />
                </div>
                <div
                  className="flex h-20 w-20 m-5 items-center justify-center  border-black bg-black"
                  onClick={fileHandler}
                >
                  <img id="image4" src={ImageIcon} className="h-14 w-14" />
                </div>
                <div
                  className="flex h-20 w-20 m-5 items-center justify-center  border-black bg-black"
                  onClick={fileHandler}
                >
                  <img id="image5" src={ImageIcon} className="h-14 w-14" />
                </div>
                <div
                  className="flex h-20 w-20 m-5 items-center justify-center  border-black bg-black"
                  onClick={fileHandler}
                >
                  <img id="image6" src={ImageIcon} className="h-14 w-14" />
                </div>
              </div>
              <input
                onChange={fileAddHandler}
                ref={fileRef}
                type="file"
                className="hidden h-10 w-full"
              />
            </div>
            <p className="text-xs text-red-700">{errors.imageError}</p>

            <label htmlFor="location">Location*</label>
            <input
              id="location"
              type="text"
              className="w-full h-10 rounded-sm bg-white border border-black placeholder:text-xs"
              placeholder="enter the model"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <p className="text-xs text-red-700">{errors.locationError}</p>

            <button
              disabled={loading ? true : false}
              type="submit"
              className="flex items-center justify-center bg-borderedgecolor h-12 mt-10 w-24 text-white font-bold"
            >
              Post Now
            </button>
            <div className="flex h-10 w-10">
              <ClipLoader
                color={'black'}
                loading={loading}
                cssOverride={{height:30,width:30}}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </form>
        </div>
      </div>
    )
}