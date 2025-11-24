
import styles from './todoApp.module.css'

import { useReducer, useState } from "react";

const initialState=[];

const reducer=(state,action)=>{

    switch(action.type){
        case 'add':
            return [...state, action.payload]
        case 'toggle':
            return state.map((todo)=> todo.id===action.payload ? {...todo,completed: !todo.completed} : todo);
        case 'delete':
            return state.filter((todo)=> todo.id !== action.payload);
        default:
            return state;
    }
};
const TodoApp=()=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const [text, setText]=useState('');

    const handleAdd=()=>{
        if(text.trim()){
            const newTodo={
                id: Date.now(),
                text,
                completed:false
            }
        dispatch({type:'add', payload:newTodo})
        setText('');
        }
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Todo App</h1>
            <input 
               className={styles.input}
               type="text" 
               value={text} 
               onChange={(e)=>setText(e.target.value)}
               placeholder="Enter a new Todo"
            />
            <button className={styles.button} onClick={handleAdd}>Add</button>

            <ul className={styles.ul}>
                {
                    state.map(todo => (
                        <li className={styles.items} key={todo.id}>
                            <div className={styles.item}>
                            <input 
                             type="checkbox" 
                             checked={todo.completed} 
                             onChange={()=> dispatch({type:'toggle', payload:todo.id})}
                            />
                            <span
                              className={styles.text}
                              style={{textDecoration: todo.completed ? 'line-through' : 'none',
                                     fontStyle: todo.completed ? 'italic' : '',
                                     color: todo.completed ? '#333' : ''}} >
                                {todo.text}
                            </span>
                            </div>
                            <button className={styles.deleteBtn} onClick={()=> dispatch({type:'delete', payload:todo.id})}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoApp;