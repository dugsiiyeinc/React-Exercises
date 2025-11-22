
import React, { useState } from 'react'
import SwitchBetweenLang from './SwitchBetweenLang'
import SwitchContext from './SwitchContext'

const Main = () => {
    const [text, setText]=useState("Hello")

  return (
    <SwitchContext.Provider value={text}>
        <button 
           onClick={()=> setText(prev => prev==="Hello" ? "!Hola" : "Hello")}
        >
            Switch to {text==="Hello" ? "Spanish" : "English"}</button>
        <SwitchBetweenLang/>
    </SwitchContext.Provider>
  )
}

export default Main
