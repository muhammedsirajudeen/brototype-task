import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import OlxImage from '../assets/Logos/olx.svg'
import LeftArrow from '../assets/Logos/leftarrow.png'

import { FirebaseError } from 'firebase/app'
// import firebase from "firebase/compat/app";
import { auth } from '../firebaseHelper/firebaseHelper'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import OlxContext from '../context/OlxContext'
import ClipLoader from 'react-spinners/ClipLoader'
import validator from 'validator'
import { Toaster } from './ui/toaster'
import { useToast } from './ui/use-toast'
export default function EmailSignup({
  setLoginpage,
}: {
  setLoginpage: Dispatch<SetStateAction<string>>
}): ReactElement {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState('')
  const [successmessage, setSuccessmessage] = useState<string>('')
  const [errormessage, setErrormessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const context = useContext(OlxContext)
  const {toast}=useToast()
  function navHandler(page: string) {
    setLoginpage(page)
  }
  function verifyHandler() {
    setLoading(true)
    if (password.length < 8 || password.trim()==='') {
      setErrormessage('password less than 8 characters')
      setLoading(false)
      return
    }
    if (!validator.isEmail(email)) {
      setErrormessage('enter a proper email')
      setLoading(false)
      return
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.table(user)
        setSuccessmessage('Signup Successful')
        context?.setAuthentication(true)
        context?.setUsername(user.email ?? '')
        context?.setLogindialog(false)
        setLoading(false)
        toast({
          color: 'black',
          style: { color: 'white', backgroundColor: 'black' },
          variant: 'destructive',
          title: 'logged in succesfully',
          description: '',
        })
        // setLoginpage("login")
      })
      .catch((err: FirebaseError) => {
        // alert(err);
        console.log(err)
        setErrormessage('Try again')
        setLoading(false)
        // window.location.reload();
      })
  }

  return (
    <>
    <Toaster/>
      <div className="flex items-center justify-between">
        <img
          src={LeftArrow}
          className="h-6 w-6 "
          onClick={() => navHandler('home')}
        />

        <img src={OlxImage} className="h-20 w-20 " />
      </div>
      <p className="font mt-2 font-bold text-sm text-borderedgecolor">
        Create account
      </p>
      <input
        type="email"
        className=" border border-borderedgecolor mt-10 p-3 w-full"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className=" border border-borderedgecolor mt-10 p-3 w-full"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={verifyHandler}
        className="flex border-2 p-2 justify-center mt-10 font-bold text-borderedgecolor w-full border-borderedgecolor "
      >
        Next
      </button>
      <ClipLoader
        color={'black'}
        loading={loading}
        cssOverride={{ height: 30, width: 30 }}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p className="text-xs text-green-500">{successmessage}</p>
      <p className="text-xs text-red-700">{errormessage}</p>
      <p className="text-xs text-gray-400 flex items-center justify-center font-light">
        Your contact number is never shared with external parties nor do we use
        it to spam you in any way.
      </p>

      {/* <p className='font-bold text-xs mt-10'>Or</p> */}
      {/* <button className='border border-t-white border-r-white border-l-white mt-5 font-bold  border-b-black' onClick={emailLoginHandler} >Next</button> */}
      {/* <button className="w-72 mt-10 bg-borderedgecolor h-10 font-bold text-white" onClick={()=>messageHandler(message)} >Login</button> */}
      <div id="recaptcha-container mt-10"></div>
    </>
  )
}
