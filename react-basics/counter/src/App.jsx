import './App.css'
import { useState } from "react"

function App() {
  const [counter, setCounter] = useState(0)
  const [isDisabled, setDisabled] = useState(true)

  const handleIncrement = () => {
    if (isDisabled) {
      setDisabled(false)
    }

    setCounter(prev => prev + 1)
  }
  const handleDecrement = () => {
    if (isDisabled) {
      return
    }

    setCounter(prev => {
      if (prev - 1 == 0) {
        setDisabled(true)
      }

      return prev - 1
    })
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <h1>Counter Assignment</h1>
      <p id="counter">{counter}</p>
      <div>
          <button className={isDisabled ? 'button-disabled' : ''} id="-" onClick={handleDecrement} disabled={isDisabled}>-</button>
          <button id="+" onClick={handleIncrement}>+</button>
      </div>
    </div>
  )
}

export default App