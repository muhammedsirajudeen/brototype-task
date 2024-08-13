import './App.css'
import {useEffect, useState} from "react"
import Card from './Card'
function App() {
  const [count,setCount]=useState(0)
  const [users,setUsers]=useState({})
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(false)
  useEffect(()=>{
    console.log("clicked")
    async function userFetcher(){
      try{
        let data=await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json()
        console.log(data)
        setUsers(data)
        setLoading(false)
  
      }catch(error){
        console.log(error)
        setLoading(true)
        setError(true)
      }
    }
    userFetcher()
  },[])
  return (
    <div className="main-container">
      <Card users={users} loading={loading} error={error} />
      <h1>COUNT : {count}</h1>
      <button onClick={()=>setCount((prev)=>prev+1)}>+</button>
      <button onClick={()=>setCount((prev)=>prev-1)}>-</button>

    </div>    
  )
}

export default App
