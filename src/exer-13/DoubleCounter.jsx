import { useReducer } from "react"


const initialState={count_A:0, count_B:0}

const reducer=(state, action)=>{
    switch(action.type){
        case 'increment_A':
            return {...state, count_A:state.count_A + 1}
        case 'decrement_A':
            return {...state, count_A:state.count_A - 1}
        case 'increment_B':
            return {...state ,count_B: state.count_B + 1}
        case 'decrement_B':
            return {...state ,count_B: state.count_B - 1}
        case 'reset_All':
            return initialState
        default:
            return state
    }
}
const DoubleCounter=()=>{

    const [state,dispatch]=useReducer(reducer,initialState)
    
    return(
        <div>
            <div>
                <h1>Counter A: {state.count_A}</h1>
                <button onClick={()=> dispatch({type:'increment_A'})}>A+</button>
                <button disabled={state.count_A===0} onClick={()=> dispatch({type:'decrement_A'})}>A-</button>
            </div>
            <div>
                <h1>Counter B: {state.count_B}</h1>
                <button onClick={()=> dispatch({type:'increment_B'})}>B+</button>
                <button disabled={state.count_B===0} onClick={()=> dispatch({type:'decrement_B'})}>B-</button>
            </div><br />
            <button disabled={state.count_A===0 && state.count_B ===0} onClick={()=> dispatch({type: 'reset_All'})}>Reset both</button>
        </div>
    )
}
export default DoubleCounter