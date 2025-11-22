
export const initialState={
    step:1,
    firstName:'',
    lastName:'',
    email:'',
    phone:''
}

export const FormReducer=(state,action)=>{
    switch(action.type){
        case 'next_step':
            return {...state, step: state.step + 1}
        case 'prev_step':
            return {...state, step: state.step  - 1}
        case 'update_field':
            return {...state, [action.field]:action.value}
        case 'reset_form':
            return initialState
        default:
            return state
    }
}