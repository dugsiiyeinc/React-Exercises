import { useState } from "react"

const Counter=()=>{
    const [count, setCount]=useState(0)

    const handleIncrement=()=>{
        setCount(prev => prev+1)
    }
    const handleDecrement=()=>{
        if(count<=0) return
        setCount(prev => prev-1)
    }
    return(
        <div>
            <h1>Count: {count}</h1>
            <button disabled={count===0} onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
        </div>

    )
}
export default Counter