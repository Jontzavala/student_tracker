export const setCourses = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/courses")
        .then(r => r.json())
        .then(courses => dispatch({type: "SET_COURSES", payload: courses}))
    }
}