import { useState } from "react"

const ToggleButton=()=>{

    const [isOn, setIsOn]=useState(true)

    const toggle=()=>{
        setIsOn(!isOn)
    }

    return(
        <>
          <p>the button is {isOn ? 'OFF' : 'ON'}</p>
          <button onClick={toggle}>turn {isOn ? 'ON' : 'OFF'}</button>
        </>
    )
}
export default ToggleButton