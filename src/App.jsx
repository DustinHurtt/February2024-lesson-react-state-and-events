import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  const [theme, setTheme] = useState('banana')
  const [number, setNumber] = useState(3)

  const toggleTheme = (event) => {
    console.log("Target=====>", event)
    setTheme(event.target.value)
  }


  const handleClick = () => {
    setNumber((prev) => prev + 1)
    // number++
    console.log("This is the number ===>", number)
  }
  
  return (
    <div className={`App ${theme}`}>

      <h1>React - state and events</h1>
      
      <Counter />

      <p onClick={handleClick}>This is our {number}</p>

      <select onChange={toggleTheme}>
        <option value="banana"> Banana </option>
        <option value="dark"> Dark </option>
      </select>


    </div>
  )
}

export default App
