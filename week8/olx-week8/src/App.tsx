import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import OlxContext from './context/OlxContext'
import Navbar from './components/Navbar'
import ProductListing from './pages/ProductListing'
import { useState } from 'react'
function App() {
  const [logindialog,setLogindialog]=useState<boolean>(false)
  return (
    <BrowserRouter>
      <OlxContext.Provider value={{logindialog,setLogindialog}}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index={true} element={<Home />} />
            <Route path='/productlisting' element={<ProductListing/>}/>
          </Route>
        </Routes>
      </OlxContext.Provider>
    </BrowserRouter>
  )
}

export default App
