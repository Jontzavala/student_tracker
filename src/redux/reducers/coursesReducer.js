function coursesReducer(state = [], action){
    switch (action.type) {
        case "SET_COURSES":
            
            return action.payload;

        case "ADD_COURSE":

            return [
                ...state,
                action.payload
            ]


        case "DELETE_COURSE":

            return state.filter(course => course.id !== action.payload)
            
        case "EDIT_COURSE":

            const courseIndex = state.findIndex(c => c.id === action.payload.id)

            return [
                ...state.slice(0, courseIndex),
                action.payload,
                ...state.slice(courseIndex + 1)
            ]



        default:
            return state;
    }
}

export default coursesReducer;