const { Switch } = require("react-router-dom");

function reducer(state = {courses: [], students: [], behaviors: []}, action){
    switch (action.type) {
        case "SET_COURSES":
            
            return {
                ...state,
                courses: action.payload
            };
    
        default:
            return state;
    }
}

export default reducer;