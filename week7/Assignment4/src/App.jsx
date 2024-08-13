import { useRef, useState } from 'react'
import validator from 'validator';

import './App.css'

function App() {
  const [name,setName]=useState("")
  const [alert,setAlert]=useState("")
  const inputRef=useRef(null)
  function submitHandler(e){
    e.preventDefault()
    console.log(name)
    inputRef.current.focus()
    if(validator.isEmpty(name)){
      setAlert("Its empty space")
    }else if(name.match(/[^\w\s]/g)){
      setAlert("cant contain special characters")
    }else if(name.length<4){
      setAlert("should be greater than 4 characters")
    }else{
      setAlert("")
    }
   
  }
  return (
    <div className='main-container'>
      <form method='post' onSubmit={submitHandler} className='main-container' >
        <input ref={inputRef} type='text' name='name' value={name} placeholder='enter the name' onChange={(e)=>setName(e.target.value)} />
        <input type='submit' value='submit'/>
        <p className='red' >{alert}</p>
      </form>
    </div>
  )
}

export default App
