export const setStudents = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/students")
        .then(r => r.json())
        .then(students => dispatch({type: "SET_STUDENTS", payload: students}))
    }
}

export const addStudent = (student) => {
    debugger
    return (dispatch) => {
        fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            },
            body: JSON.stringify(student)
        })
        .then(r => r.json())
        .then(student => dispatch({type: "ADD_STUDENT", payload: student}))
    }
}