import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Authentication/Login'
import NetflixContext from './context/NetflixContext'
import app, { auth } from './firebase/firebaseHelper'
import Signup from './pages/Authentication/Signup'
import Create from './pages/Authentication/Create'
import Home from './pages/Home/Home'
// import { useContext } from 'react'
function App() {
  // const context=useContext(NetflixContext)
  return (
    <NetflixContext.Provider value={{app:app,auth:auth}} >
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>

    </NetflixContext.Provider>
  )
}

export default App
