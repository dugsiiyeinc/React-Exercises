
import React, { useContext } from 'react'
import SwitchContext from './SwitchContext'

const SwitchBetweenLang = () => {
    const text=useContext(SwitchContext)
  return (
    <div>
        <h1>{text}</h1>
    </div>
  )
}

export default SwitchBetweenLang
