import { useState, type JSX } from "react"
import "./Counter.css"

type CounterProps = {
    initial: number
}

function Counter({initial}: CounterProps): JSX.Element {
    const [count, setCount] = useState<number>(initial)

    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }

    return (
        <div className="counter">
            <h2>Counter</h2>
            <p>{count}</p>
            <div>
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </div>
    )
}

export default Counter