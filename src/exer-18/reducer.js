
export const initialValues=[];
export const reducer=(state,action)=>{
    switch(action.type){
        case 'add':
            return [...state, action.value]
        case 'edit':
            return state.map((contact)=>contact.id ===action.value.id ? action.value :contact)
        case 'delete':
            return state.filter((contact)=>contact.id !==action.value)
        case 'toggleFavorite':
            return state.map((contact)=>contact.id ===action.value? {...contact, favorite:!contact.favorite} : contact)
        default:
            return state;
    }

}