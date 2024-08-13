import './App.css'
import Card from './Card'
const users=[
  {id:1,name:"Leanne Graham",email:"leanne@gmail.com"},
  {id:2,name:"Luan Juan",email:"luan29@gmail.com"}

]

function App() {

  return (
    <div className='main-container'>
      <Card users={users}/>
    </div>
  )
}

export default App
