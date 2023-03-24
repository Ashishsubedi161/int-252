import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from '../components/form'
import Header from '../components/header'
import Alert from '../components/alert'



function App() {
const menu = ["Home","Contact","About"]

const menn =["shop","Boys","Girls"]

  

  const[style , mystyle] = useState(
      'light'
  )



  return (
    
    
    <div className={style}>
      <Form setstyle = {mystyle} />


    </div>
  )
}


 
  
  


export default App
