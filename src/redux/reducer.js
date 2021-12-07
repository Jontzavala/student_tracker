import { combineReducers } from "redux";

const rootReducer = combineReducers({
    courses: coursesReducer,
    students: studentsReducer,
    behaviors: behaviorsReducer
});

export default rootReducer;

function coursesReducer(state = [], action){
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

function studentsReducer(state = [], action){
    switch (action.type) {
        case "SET_STUDENTS":
            
            return{
                ...state,
                students: action.payload
            };
    
        default:
            return state;
    }
}

function behaviorsReducer(state = [], action){
    switch (action.type) {
        case "SET_BEHAVIORS":
            
            return{
                ...state,
                behaviors: action.payload
            };
    
        default:
            return state;
    }
}
// students: [], behaviors: []