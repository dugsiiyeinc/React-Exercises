import React, { useContext } from 'react'
import ContactContetx from './ContactContext'
import { ContactItem } from './ContactItem';

export const ContactList = () => {
    const {state}=useContext(ContactContetx);
  return (
    <>
    <h2>Contact List</h2>
    <ul>
        {
            state.length>0 ?(
                state.map(contact=>(
                    <ContactItem key={contact.id} contact={contact}/>
                ))
            ): (
                <li>No contacts found</li>
            )
        }
    </ul>
    </>
  )
}