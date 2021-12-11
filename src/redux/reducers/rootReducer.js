import coursesReducer from "./coursesReducer"
import studentsReducer from "./studentsReducer"
import behaviorsReducer from "./behaviorsReducer"

import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    courses: coursesReducer,
    students: studentsReducer,
    behaviors: behaviorsReducer
});

