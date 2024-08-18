import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import OlxContext from './context/OlxContext'
import Navbar from './components/Navbar'
function App() {
  return (
    <BrowserRouter>
      <OlxContext.Provider value={10}>
        <Routes>
          <Route path="/" element={<Navbar />} >
            <Route index={true} element={<Home/>}/>
          </Route>
        </Routes>
      </OlxContext.Provider>
    </BrowserRouter>
  )
}

export default App
