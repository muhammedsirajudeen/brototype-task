import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Authentication/Login'
import NetflixContext from './context/NetflixContext'
import app, { auth } from './firebase/firebaseHelper'
import Signup from './pages/Authentication/Signup'
import Create from './pages/Authentication/Create'
import Home from './pages/Home/Home'
import { useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import Details from './pages/Home/Details'
import Watch from './pages/Home/Watch'
import Profile from './pages/Home/Profile'
// import { useContext } from 'react'
function App() {
  // const context=useContext(NetflixContext)
  const [user,setUser]=useState<User>()
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUser(user)
        // setAuthentication(true)
        // setUsername(user.email??"")
        // setProfileimage(user.photoURL ?? "")

      }else{
        console.log("user not found")
      }
    })
  },[])
  return (
    <NetflixContext.Provider value={{app:app,auth:auth,user:user}} >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/details' element={<Details/>}/>
        <Route path='/watch' element={<Watch/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </BrowserRouter>

    </NetflixContext.Provider>
  )
}

export default App
