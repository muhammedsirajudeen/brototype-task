import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import NetflixContext from "../../context/NetflixContext";
import validator from "validator";
import { ClipLoader } from "react-spinners";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "./Login.css"
interface errorProps{
    emailError:string,
    passwordError:string
}
export default function Login() {
  const navigate = useNavigate();
  const context = useContext(NetflixContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading,setLoading]=useState<boolean>(false)
  const [errormessage,setErrormessage]=useState<errorProps>({
    emailError:"",
    passwordError:""
  })
  async function signinHandler() {
    setLoading(true)
    if (!validator.isEmail(email)) {
      //set error message here
      setErrormessage((prev)=>({...prev,emailError:"enter a proper email"}))
      setLoading(false)
      return;
    }else{
        setErrormessage((prev)=>({...prev,emailError:""}))
    }
    if (password.length < 8) {
      //set error message
      setErrormessage((prev)=>({...prev,passwordError:"password must be minimum 8 characters long"}))
      setLoading(false)
      return;
    }else{
        setErrormessage((prev)=>({...prev,passwordError:""}))
    }
    if(context.auth){
        try{
            const user=await signInWithEmailAndPassword(context.auth,email,password)
            toast(`Welcome ${user.user.email}`)
            setLoading(false)
            navigate('/home')

        }catch(error){
            console.log(error)
            toast("check your credentials")
            setLoading(false)
        }

    }
    
  }
  return (
    <div
      className={`maincontainer h-screen w-screen overflow-x-hidden overflow-y-hidden `}
    >
      <img src="netflixlogo.svg" className="h-40 w-40 ml-20 " />
      <div className="w-full flex flex-col items-center justify-center">
        <div
          className={`logincontainer w-1/4 h-auto signin-container flex flex-col items-center justify-start p-2`}
        >
          <h1 className="text-3xl text-white font-bold mt-10">Signin</h1>
          <input
            type="text"
            placeholder="enter the email"
            className="mt-4 text-white bg-specialcolor placeholder:text-sm placeholder:text-white placeholder:ml-2 w-80 rounded-sm h-14 border border-gray-200"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-xs font-bold text-red-600">
            {errormessage.emailError}
          </p>
          <input
            type="password"
            placeholder="enter the password"
            className="mt-4 text-white bg-specialcolor placeholder:text-sm placeholder:text-white placeholder:ml-2 w-80  rounded-sm h-14 border border-gray-200"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-xs font-bold text-red-600">
            {errormessage.passwordError}
          </p>

          <button
            className="flex items-center justify-center bg-red-700 mt-10"
            onClick={signinHandler}
          >
            <p className="font-bold text-white text-sm w-80 p-3">Sign In</p>
          </button>
          <div className="flex items-center justify-center">
            <ClipLoader
                color={"red"}
                loading={loading}
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
          </div>
          <p className="text-center text-lg font-light text-gray-600 mt-4">
            OR
          </p>
          <button className="bg-buttoncolor  w-80 mt-4 ">
            <p className="text-sm font-bold text-white p-3">
              Use a signin code
            </p>
          </button>
          <button className="border-hidden">
            <p className="font-normal mt-4 text-sm text-white">
              forgot your password?
            </p>
          </button>
          <div className="flex items-center justify-start m-10">
            <p className="text-sm text-gray-400">New to Netflix?</p>
            <button
              className="border-hidden ml-2"
              onClick={() => navigate("/signup")}
            >
              <p className="font-bold text-sm text-white ">Sign up now.</p>
            </button>
          </div>
          <p className="text-xs text-gray-400 m-10">
            This page is protected by DMCA....
          </p>
        </div>
      </div>
      <ToastContainer style={{borderColor:"black",color:"white"}} />

    </div>
  );
}
