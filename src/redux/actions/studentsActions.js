export const setStudents = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/students")
        .then(r => r.json())
        .then(students => dispatch({type: "SET_STUDENTS", payload: students}))
    }
}

export const addStudent = (student) => {
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

export const deleteStudent = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/students/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((data) => dispatch({type: "DELETE_STUDENT", payload: id}))
    }
}