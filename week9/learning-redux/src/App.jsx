import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addTodo, examplethunk } from './store/todoSlice'
import { createAction } from '@reduxjs/toolkit'

function App() {
  const todo=useSelector((state)=>state.todo.todo)
  const count=useSelector((state)=>state.count.value)
  
  let increment=createAction('increment')
  console.log(todo)
  const dispatch=useDispatch()
  function addHandler(){
    let value=document.querySelector("#todo").value
    console.log(value)
    dispatch(addTodo(value))
  }
  return (
    <>
      <input id='todo' type='text'/>
      <button onClick={addHandler} >add</button>
      <button onClick={()=>dispatch(increment())} >++</button>
      <button onClick={()=>dispatch(examplethunk())} >thunk</button>
      <h1>count is {count}</h1>
      <button onClick={()=>dispatch({type:'increment'})}>legacy</button>
      {
        todo.map((todo)=>{
          return(
            <div key={todo} >{todo}</div>

          )
        })
      }
    </>
  )
}

export default App
