function behaviorsReducer(state = [], action){
    switch (action.type) {
        case "SET_BEHAVIORS":
            
            return action.payload
    
        default:
            return state;
    }
}

export default behaviorsReducer;