import { useReducer, useState } from "react"
import { FormReducer, initialState } from "./FormReducer"


const MultiStepForm=()=>{

    const [state,dispatch]=useReducer(FormReducer,initialState)
    console.log(state.step);

    const handleChange=(e)=>{
        dispatch({
            type:'update_field',
            field:e.target.name,
            value:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        alert("form submitted successfully")
        dispatch({type:'reset_form'})
    }

    return(
        <div>
            {
                state.step===1 && (
                    <div>
                        <h1>Step 1: profile</h1>
                        <input 
                          type="text" 
                          name="firstname"
                          value={state.firstname}
                          onChange={handleChange}
                          placeholder="enter firstname"
                        /> <br />
                        <input 
                           type="text"
                           name="lastname"
                           value={state.lastname}
                           onChange={handleChange}
                           placeholder="enter lastname" 
                        /> <br />
                        <button onClick={()=> dispatch({type:'next_step'})}>next</button>
                    </div>
                )
            }
            {   state.step===2 && (
                    <div>
                        <h1>Step 2: Contact</h1>
                        <input 
                          type="text" 
                          name="email"
                          value={state.email}
                          onChange={handleChange}
                          placeholder="enter email"
                        /> <br />
                        <input 
                           type="text"
                           name="phone"
                           value={state.phone}
                           onChange={handleChange}
                           placeholder="enter phone number" 
                        /> <br />
                        <button onClick={()=> dispatch({type:'prev_step'})}>back</button>
                        <button onClick={()=> dispatch({type:'next_step'})}>next</button>

                    </div>
                )
            }
            {   state.step===3 && (
                    <div>
                        <h1>Step 3: Review</h1>
                        <span>Firstname: {state.firstname}</span> <br />
                        <span>Lastname: {state.lastname}</span> <br />
                        <span>Email: {state.email}</span> <br />
                        <span>Phone: {state.phone}</span> <br />
                        <button onClick={()=> dispatch({type:'prev_step'})}>back</button>
                        <button onClick={handleSubmit}>confirm</button>
                    </div>
                )
            }
        </div>
    )

}
export default MultiStepForm