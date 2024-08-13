import { useEffect, useState, useRef } from 'react'
import './App.css'
import AddImage from "/add.png"
import CloseImage from "/close.png"
import TickImage from "/tick.png"
import FalseImage from "/false.png"
import DeleteImage from "/delete.png"
import EditImage from "/edit.png"
function App() {
  const [open,setOpen]=useState(false)
  const [edit,setEdit]=useState(false)
  const [completed,setCompleted]=useState(false)
  const [tasks,setTasks]=useState([])
  const [editask,setEdittask]=useState("")
  const [task,setTask]=useState("")
  const [taskpointer,setTaskpointer]=useState("")
  const isFirstRender = useRef(true); // Ref to track initial render

  useEffect(()=>{
    setTasks(JSON.parse(window.localStorage.getItem("tasks")) ?? [] )
  },[])
  
  useEffect(()=>{
    if(!isFirstRender.current){
      window.localStorage.setItem("tasks",JSON.stringify(tasks))
    }else{
      isFirstRender.current=false
    }
  },[tasks])

  function storageHandler(){
    window.localStorage.setItem("tasks",JSON.stringify(tasks))

  }

  function addHandler(){
    setOpen(true)
  }
  function completeHandler(){
    setCompleted(true)
  }
  function incompleteHandler(){
    setCompleted(false)
  }

  function deleteHandler(e){
    let id=e.target.id
    setTasks(tasks.filter((task)=>{
      return task.task!==id
    }))
  }
  function editHandler(e){
    setEdit(true)
    let arrayfilter=(tasks.filter((task)=>task.task===e.target.id))[0]
    setEdittask(arrayfilter.task)
    setTaskpointer(arrayfilter.task)
    setCompleted(arrayfilter.status)
    
  }
  function editSubmitHandler(){
    let temptasks=[]
    for(let task of tasks){
      if(task.task===taskpointer){

        task.task=editask
        task.status=completed
        temptasks.push(task)
      }else{
        temptasks.push(task)
      }
    }
    setTasks(temptasks)
    setEdit(false)
  }
  
  function submitHandler(){
    setTasks((prev)=>[...prev,{task:task,status:completed}])
    setTask("")
    setCompleted(false)

  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <h1 className=' text-white font-bold text-2xl' >TODO APPLICATION</h1>
        <button className=' border-hidden text-white' onClick={addHandler}><img className='ml-10 h-6 w-6' src={AddImage}/></button>  
      </div>
      <div className=' flex flex-col items-center justify-center'>
          {
            tasks.map((task)=>{
              return(
                <div key={task.task} className='flex items-center justify-evenly w-full mt-10'>
                  <div className='flex w-1/4 h-full items-center justify-center '>
                    <p className='w-full text-xs text-white align-middle' >{task.task}</p>
                  </div>
                  <div className='w-1/4 flex items-center justify-center'>
                    <div className='flex bg-black h-10 w-28  rounded-xl'>
                    <button className={`${task.status ? "bg-gray-700" : "" } w-1/2 rounded-xl flex justify-center items-center`}><img className='h-3 w-3' src={TickImage}/></button>
                    <button className={`${task.status ? "" : "bg-gray-700" } w-1/2 rounded-xl flex items-center justify-center`}><img className='h-3 w-3' src={FalseImage}/></button>
                    </div>
                  </div>
                  <div className='w-1/4 flex items-center justify-center'>
                    <button className='border-hidden' onClick={editHandler}><img id={task.task} src={EditImage} className='h-6 w-6' /></button>
                  </div>
                  <div className='w-1/4 flex items-center justify-center'>
                    <button className='border-hidden' onClick={deleteHandler}><img id={task.task} src={DeleteImage} className='h-6 w-6' /></button>
                  </div>

                </div>
              )
            })
          }         
      </div>
      {open && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white h-96 w-96 p-4 flex items-center justify-start flex-col rounded shadow-lg">
                  <div className='w-full flex items-start justify-start'>
                    <button onClick={() => setOpen(false)} className="font-bold"><img className='h-6 w-6' src={CloseImage}/></button>
                  </div>
                  <h1>ADD TASK</h1>
                  <input className='mt-10 border border-black placeholder:text-xs ' type='text' placeholder='enter the task....' value={task} onChange={(e)=>setTask(e.target.value)} />
                  <div className='flex bg-black h-10 w-28 mt-10 rounded-xl'>
                    <button className={`${completed ? "bg-gray-700" : "" } w-1/2 rounded-xl flex justify-center items-center`} onClick={completeHandler} ><img className='h-3 w-3' src={TickImage}/></button>
                    <button className={`${completed ? "" : "bg-gray-700" } w-1/2 rounded-xl flex items-center justify-center`} onClick={incompleteHandler} ><img className='h-3 w-3' src={FalseImage}/></button>
                  </div>
                  <button className='border-hidden bg-black text-white mt-20 text-xs p-2 rounded-lg' onClick={submitHandler} >Submit</button>
              </div>
          </div>
        )}
      {edit && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white h-96 w-96 p-4 flex items-center justify-start flex-col rounded shadow-lg">
              <div className='w-full flex items-start justify-start'>
                <button onClick={() => setEdit(false)} className="font-bold"><img className='h-6 w-6' src={CloseImage}/></button>
              </div>
              <h1>EDIT TASK</h1>
              <input className='mt-10 border border-black placeholder:text-xs ' type='text' placeholder='enter the task....' value={editask} onChange={(e)=>setEdittask(e.target.value)} />
              <div className='flex bg-black h-10 w-28 mt-10 rounded-xl'>
                <button className={`${completed ? "bg-gray-700" : "" } w-1/2 rounded-xl flex justify-center items-center`} onClick={completeHandler} ><img className='h-3 w-3' src={TickImage}/></button>
                <button className={`${completed ? "" : "bg-gray-700" } w-1/2 rounded-xl flex items-center justify-center`} onClick={incompleteHandler} ><img className='h-3 w-3' src={FalseImage}/></button>
              </div>
              <button className='border-hidden bg-black text-white mt-20 text-xs p-2 rounded-lg' onClick={editSubmitHandler} >Edit</button>
          </div>
      </div>  
      )}
    </>
  )
}

export default App
