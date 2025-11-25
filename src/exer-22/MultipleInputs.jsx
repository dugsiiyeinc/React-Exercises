import React, { useState } from 'react'

const MultipleInputs = () => {
    const [formData, setFormData]=useState({
        username:'',
        email:'',
        checkbox:false,
        selectedOption:''
    })

    const handleSubmit=(e)=>{
        e.preventDefault()

        console.log("form Data: ",formData);
    }
    const handleChange=(e)=>{

        const {name,type,checked,value}=e.target || e.target.checked
         setFormData(prevData => ({
            ...prevData, 
            [name]:type === "checkbox" ? checked : value}))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>username:</label>
        <input 
           type="text"
           name='username' 
           value={formData.username}
           onChange={handleChange}
        />
        <label>username:</label>
        <input 
           type="text"
           name='email' 
           value={formData.email}
           onChange={handleChange}
        />
        <label>check:</label>
        <input 
           type="checkbox"
           name='checkbox'
           checked={formData.checkbox}
           onChange={handleChange}
        />
        <select 
          name="selectedOption" 
          value={formData.selectedOption}
          onChange={handleChange}
        >
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
        </select>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default MultipleInputs
