import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import OlxContext from './context/OlxContext'
import Navbar from './components/Navbar'
import ProductListing from './pages/ProductListing'
import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from "../src/firebaseHelper/firebaseHelper"
import Profile from './pages/Profile'
import PostAd from './pages/PostAd'
import Post from './pages/Post'
function App() {
  const [logindialog,setLogindialog]=useState<boolean>(false)
  const [authentication,setAuthentication]=useState<boolean>(false)
  const [username,setUsername]=useState<string>("")  
  const [profileimage,setProfileimage]=useState<string>("")
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        console.log(user)
        setAuthentication(true)
        setUsername(user.email??"")
        setProfileimage(user.photoURL ?? "")

      }else{
        console.log("user not found")
      }
    })
  },[])
  return (
    <BrowserRouter>
      <OlxContext.Provider value={{logindialog,setLogindialog,authentication,setAuthentication,username,setUsername,profileimage}}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index={true} element={<Home />} />
            <Route path='/productlisting' element={<ProductListing/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/postad' element={<PostAd/>}/>
            <Route path='/post' element={<Post/>}/>
          </Route>
        </Routes>
      </OlxContext.Provider>
    </BrowserRouter>
  )
}

export default App
