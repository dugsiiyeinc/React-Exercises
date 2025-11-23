import React, { useReducer, useState } from 'react'
import ContactContetx from './ContactContext'
import { initialValues, reducer } from './reducer'
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';

export const ContactApp = () => {

    const [state, dispatch]=useReducer(reducer,initialValues);
    const [editContact, setEditContact]=useState(null);
  return (
    <ContactContetx.Provider value={{state,dispatch,editContact, setEditContact}}>
        <h1>Contact App</h1>
        <ContactForm/>
        <ContactList/>
    </ContactContetx.Provider>
  )
}