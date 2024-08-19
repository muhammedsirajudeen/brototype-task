import { ReactElement, useContext, useEffect, useState } from 'react'

import { DocumentData, getFirestore } from 'firebase/firestore'
import { collection, getDocs } from 'firebase/firestore'
import app from '../firebaseHelper/firebaseHelper'

import TopBar from '../components/TopBar'
import CategoryBox from '../components/CategoryBox'
import Recommendations from '../components/Recommendations'

import OlxContext from '../context/OlxContext'

import GuitarImage from "../assets/Logos/GuitarImage.png"

import EmailLogin from '../components/EmailLogin'
import EmailSignup from '../components/EmailSignup'

export default function Home(): ReactElement {
  const [dialog, setDialog] = useState<boolean>(false)
  // the data has differing fields so
  const [products, setProducts] = useState<Array<DocumentData>>([])
  const [loading, setLoading] = useState(true)
  
  const [loginpage,setLoginpage]=useState<string>("home")

  const context=useContext(OlxContext)
  console.log(context)
  //generating 50 array elements so that we can map over it
  const numbers = Array.from({ length: 50 }, (_, i) => i + 1)

  useEffect(() => {
    async function getData() {
      const db = getFirestore(app)
      const querySnapshot = await getDocs(collection(db, 'Products'))
      const products: Array<DocumentData> = []
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        products.push(data)
      })
      setProducts(products)
      setLoading(false)
    }
    getData()
  }, [])

  function emailLoginHandler(){
    setLoginpage("login")
  }
  function emailSignupHandler(){
    setLoginpage("signup")
  }


  return (
    <>
      <TopBar setDialog={setDialog} />
      {dialog && <CategoryBox />}
      <Recommendations products={products} />
      {/* Home page loading animation */}
      {loading && (
        <div className="flex flex-wrap items-start justify-start  w-full h-full ">
          {numbers.map((number:number) => {
            return (
              <div key={number} className="flex ml-20 mt-10 items-start justify-start flex-col">
                <div className="skeleton-loader h-40 w-52"></div>
                <div className="skeleton-loader mt-5 h-10 w-52"></div>
              </div>
            )
          })}
        </div>
      )}
      {context?.logindialog && 
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white h-auto w-96 p-4 flex items-center justify-start flex-col rounded shadow-lg">
                    <button onClick={()=>{
                        context?.setLogindialog(false)
                    }}>X</button>
                    {loginpage==="home" ? 
                          <>
                            <img src={GuitarImage} className="h-20 w-20 "/>
                            <p className='font mt-2 font-bold text-sm text-borderedgecolor'>
                              Help us become one of the best <br/> sellers in our country
                            </p>
                            <button onClick={emailLoginHandler} className='flex border-2 p-2 justify-center mt-10 font-bold text-borderedgecolor w-full border-borderedgecolor '>
                              Login With Email
                            </button>
                            <p className='font-bold text-xs mt-10'>Or</p>
                            <button className='border border-t-white border-r-white border-l-white mt-5 font-bold  border-b-black' onClick={emailSignupHandler} >Signup With Email</button>
                            {/* <input type="text" className="w-72 border border-t-white border-l-white border-r-white border-b-black mt-10" placeholder="write your message here" value={message} onChange={(e)=>setMessage(e.target.value)} /> */}
                            {/* <button className="w-72 mt-10 bg-borderedgecolor h-10 font-bold text-white" onClick={()=>messageHandler(message)} >Login</button> */}

                          </>
                          :
                          <></>
                    }
                    {loginpage==="login" ?
                          <EmailLogin key={1}  setLoginpage={setLoginpage}/>
                    :<></> }
                    {
                      loginpage==="signup" ? 
                        <EmailSignup key={2} setLoginpage={setLoginpage}/>
                      :
                      <></>
                    }
                </div>
            </div> 
            }
    </>
  )
}
