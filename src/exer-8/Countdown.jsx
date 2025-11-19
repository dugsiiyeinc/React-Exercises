import { useEffect, useState } from "react"

const Countdown=()=>{
    const [time, setTime]=useState(0)
    const [inputValue,setInputValue]=useState(0)
    const [isRunning, setIsRunning]=useState(false)

    const handleChange=(e)=>{
        setInputValue(e.target.value)
        setTime(e.target.value)
    }
    
    useEffect(()=>{
        let timerId;

        if(time===0) setIsRunning(false)
            

        if(isRunning){
            timerId=setInterval(()=>{
                setTime(prev => prev -1)
            },1000)
        }

        return ()=> clearInterval(timerId)
        
    },[isRunning,time])


    const handleStartTime=()=>{
        if(time>0) setIsRunning(true)
    }
    const handleStopTime=()=>{
        setIsRunning(false)
    }
    const handleReset=()=>{
        setIsRunning(false)
        setTime(0)
        setInputValue("")
    }

    return(
        <div>
            <h2>Coundown Timer</h2>
            <span>set time (seconds): </span>
            <input 
               type="number"
               value={inputValue}
               onChange={handleChange}
               
            />
            <p>Time left: {time} seconds</p>
            <button disabled={isRunning} onClick={handleStartTime}>Start</button>
            <button disabled={!isRunning} onClick={handleStopTime}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default Countdown