function coursesReducer(state = [], action){
    switch (action.type) {
        case "SET_COURSES":
            
            return action.payload;

        case "ADD_COURSE":

            return [
                ...state,
                action.payload
            ]
            
        default:
            return state;
    }
}

export default coursesReducer;