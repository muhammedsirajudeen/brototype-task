import { useDispatch, useSelector } from 'react-redux'
import './App.css'
// import store from './store/store'
function App() {
  let count=useSelector((state)=>state.value)
  console.log(count)
  let dispatch=useDispatch()
  console.log(count)
  return (
    <>
      <button onClick={()=>dispatch({type:"INCREMENT"})} >+</button>
      {count}
    </>
  )
}

export default App
