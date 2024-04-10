import { useState } from 'react'
import './App.css'

function App() {
  const [counter , setCounter] = useState(15)

  const addValue = () =>{
    if(counter < 20){
      setCounter((prevCounter)=> prevCounter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter((prevCounter) => prevCounter - 1)
    }
  }

  return (
    <>
      <h1>Hello Utkarsh</h1>
      <h2>current Value: {counter}</h2>
      <button onClick={addValue} disabled = {counter >= 20}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue} disabled = {counter <= 0}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
