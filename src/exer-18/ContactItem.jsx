import React, { useContext, useState } from 'react'
import ContactContetx from './ContactContext'

export const ContactItem = ({contact}) => {
    const {dispatch, setEditContact}=useContext(ContactContetx);
    const [isClicked, setIsClicked]=useState(false)

    const handleFavirote=()=>{
        dispatch({type: "toggleFavorite" , value:contact.id})
        setIsClicked(!isClicked)
    }
    const handleDelete=()=>{
        dispatch({type: "delete", value: contact.id})
    }
    const handleEdit=()=>{
        setEditContact(contact)
    }
  return (
    <div>
      <p><strong>Name: {contact.name} {contact.favorite ? "❤️" : ""}</strong></p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>

      <button onClick={handleFavirote}>{isClicked ? "unFavirote" : "Favirote"} </button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}