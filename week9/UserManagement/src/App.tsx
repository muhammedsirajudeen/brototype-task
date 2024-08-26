import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './pages/Authentication/Login'
import Signup from './pages/Authentication/Signup'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
