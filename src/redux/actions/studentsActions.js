export const setStudents = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/students")
        .then(r => r.json())
        .then(students => dispatch({type: "SET_STUDENTS", payload: students}))
    }
}