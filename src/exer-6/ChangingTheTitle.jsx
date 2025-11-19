import { useEffect, useState } from "react";

const ChangingTheTitle=()=>{
    const [title, setTitle]=useState("Welcome!")
    const [name, setName]=useState("")
    const [greeting, setGreeting]=useState("Hello")

    useEffect(()=>{
        document.title=title
        if(name !== ""){
          setTitle(`${greeting},${name}`)
        }
    })
    return(
        <>
            <div>
              <label>Enter Your Name:</label>
              <input 
                 type="text" 
                 value={name}
                 onChange={e => setName(e.target.value)}
              />
            </div>

            <div>
              <label>Choose a Greeting:</label>
              <input 
                 type="text" 
                 value={greeting}
                 onChange={e => setGreeting(e.target.value)}
              />
            </div>
        </>
    )
}
export default ChangingTheTitle;