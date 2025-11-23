
import React, { useContext, useEffect, useState } from 'react'
import ContactContetx from './ContactContext';

export const ContactForm = () => {
    const {dispatch, editContact, setEditContact} = useContext(ContactContetx);

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [phone, setPhone]=useState("");

    useEffect(()=>{
        if(editContact){
            setName(editContact.name);
            setEmail(editContact.email);
            setPhone(editContact.phone);
        }
    },[editContact]);

    const handleAdd=(e)=>{
        e.preventDefault();
        // console.log({name, email, phone});

        if(name.trim()){
            if(editContact){
                dispatch({type: "edit", value: {...editContact,name,email,phone}});
                setEditContact(null);
            }else{
                const newContact={id: Date.now().toString(),name, email, phone}
                dispatch({type:"add", value: newContact});
            }
            setName("");
            setEmail("");
            setPhone("");
        }
    }
    const handleCancel=()=>{
        setEditContact(null);
        setName("");
        setEmail("");
        setPhone("");
    }

  return (
    <div>
        <form>
            <label>
                Name:
                <input 
                   type="text" 
                   name="name"
                   placeholder='name'
                   value={name} 
                   onChange={(e)=>setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input 
                   type="email" 
                   name="email"
                   placeholder='email'
                   value={email} 
                   onChange={(e)=>setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Phone:
                <input 
                   type="text" 
                   name="phone" 
                   placeholder='phone'
                   value={phone}
                   onChange={(e)=>setPhone(e.target.value)}
                />
            </label>
            <br />
            {editContact ? (
                <>
                  
                  <button onClick={handleAdd} type='submit'>update</button>
                  <button onClick={handleCancel}>Cancel</button>
                </>
            ):
            (
                <button onClick={handleAdd} type='submit'>Add Contact</button>
            )}
        </form>
    </div>
  )
}