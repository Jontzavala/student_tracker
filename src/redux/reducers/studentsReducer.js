

function studentsReducer(state = [], action){
    switch (action.type) {
        case "SET_STUDENTS":
            
            return action.payload

        case "ADD_STUDENT":

            return [
                ...state,
                action.payload
            ]
    
        default:
            return state;
    }
}

export default studentsReducer;