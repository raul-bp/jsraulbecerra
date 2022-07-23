import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(10)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount (count - 1)
    }
 
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Restar</button>
            <button onClick={increment}>Sumar</button>
        </div>
    )
}

export default Counter