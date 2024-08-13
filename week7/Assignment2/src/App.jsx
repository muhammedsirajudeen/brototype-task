import './App.css'
import {useEffect, useState} from "react"
import Card from './Card'
function App() {
  const [count,setCount]=useState(0)
  const [users,setUsers]=useState({})
  useEffect(()=>{
    async function userFetcher(){
      let data=await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json()
      console.log(data)
      setUsers(data)
    }
    userFetcher()
  },[])
  return (
    <div className="main-container">
      <Card users={users}/>
      <h1>COUNT : {count}</h1>
      <button onClick={()=>setCount((prev)=>prev+1)}>+</button>
      <button onClick={()=>setCount((prev)=>prev-1)}>-</button>

    </div>    
  )
}

export default App
