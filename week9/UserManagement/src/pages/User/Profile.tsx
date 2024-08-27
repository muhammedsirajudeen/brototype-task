import axios from "axios";
import { ChangeEvent, ReactElement, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import url from "../../helper/backendUrl";
import { toast, ToastContainer } from "react-toastify";

interface userProps {
  email: string;
  password: string;
  profileImage: string;
  _id: string;
  address?:string;
  phone?:string;
}

interface FormValues {
  phone: string;
  address: string;
  image:File

}

export default function Profile(): ReactElement {
  const data = useLoaderData();
  const navigate = useNavigate();
  const [user, setUser] = useState<userProps>();
  const fileRef=useRef<HTMLInputElement>(null)
  const imageRef=useRef<HTMLImageElement>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  useEffect(() => {
    if (!data) {
      navigate("/");
    } else {
      

      setUser(data as userProps);
        if(user){
            reset(
                {
                    address:user.address,
                    phone:user.phone
                }
              )
              if(imageRef.current?.src){
                imageRef.current.src=user.profileImage
              }

        }
    }
  }, [navigate, data, reset, user]);
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    // Handle form submission
    console.log(data);
    const imageFile=imageRef.current?.src
    try{
        const response=await axios.post(url+"/user/update",
            {
                phone:data.phone,
                address:data.address,
                profileImage:imageFile
            },
            {
                headers:{
                    Authorization:`Bearer ${window.localStorage.getItem("token")}`
                }
            }
        )
        console.log(response)
        if(response.data.message==="success"){
            toast("profile updated successfully")
        }   
    }catch(error){
        console.log(error)
        toast("please try again")
    }
  };
  const imageHandler=()=>{
    fileRef.current?.click()
  }
  const filechangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
    if(e.target.files){
        const reader=new FileReader()
        reader.onloadend=()=>{
            if(imageRef.current){
                imageRef.current.src=reader.result as string

            }
        }
        reader.readAsDataURL(e.target.files[0])

    }
  }
  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="h-auto p-2 w-96 shadow-xl rounded-xl flex flex-col items-center">
        <p className="font-light text-xl mt-2">PROFILE</p>
        <img ref={imageRef} src={user?.profileImage ?? "user.png"} className="h-20 w-20 rounded-full mt-2" onClick={imageHandler} />
        <p className="text-sm font-light mt-4">{user?.email}</p>
        <form className="flex flex-col items-start mt-2" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="mobile" className="text-xs font-light">Phone Number</label>
          <input
            id="mobile"
            type="number"
            className="h-8 w-72 border border-black rounded-sm placeholder:text-xs"
            placeholder="enter the phone number"
            {...register("phone", {
              required: "Phone is required",
              minLength: {
                value: 10,
                message: "phone must be minimum 10 characters long",
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-600 text-xs">{errors.phone.message}</p>
          )}
        <label htmlFor="address" className="text-xs font-light mt-5">Address</label>
          <input
            id="address"
            type="text"
            className="h-16 w-72 border border-black rounded-sm placeholder:text-xs"
            placeholder="enter the address"
            {...register("address", {
              required: "Address is required",
              minLength: {
                value: 10,
                message: "phone must be minimum 10 characters long",
              },
              validate:(value:string)=>{
                if(!value.trim()){
                    return "Address cannot be empty"
                }
                return true
              }

            })}
          />
          {errors.address && (
            <p className="text-red-600 text-xs">{errors.address.message}</p>
          )}

          <button type="submit" className="h-10 p-2 bg-black text-white mt-2">submit</button>
          <input onChange={filechangeHandler} ref={fileRef} type="file" className="hidden"/>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
}
