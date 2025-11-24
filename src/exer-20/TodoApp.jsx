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
        <div className="bg-white w-100 m-auto mt-20 p-5 text-black shadow rounded">
            <h1 className="text-center mb-10 text-2xl">Todo App</h1>
            <input 
               className=" bg-gray-200 w-70 p-2 rounded-lg outline-none"
               type="text" 
               value={text} 
               onChange={(e)=>setText(e.target.value)}
               placeholder="Enter a new Todo"
            />
            <button className=" bg-blue-500 p-2 ml-2 rounded text-white" onClick={handleAdd}>Add</button>

            <ul className="">
                {
                    state.map(todo => (
                        <li className="bg-gray-200 p-2 mt-4 flex justify-between items-center rounded" key={todo.id}>
                            <div className="flex items-center">
                            <input 
                             type="checkbox" 
                             checked={todo.completed} 
                             onChange={()=> dispatch({type:'toggle', payload:todo.id})}
                            />
                            <span
                              className="pl-2"
                              style={{textDecoration: todo.completed ? 'line-through' : 'none',
                                     fontStyle: todo.completed ? 'italic' : '',
                                     color: todo.completed ? '#333' : ''}} >
                                {todo.text}
                            </span>
                            </div>
                            <button className="text-red-500 cursor-pointer" onClick={()=> dispatch({type:'delete', payload:todo.id})}>delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoApp;