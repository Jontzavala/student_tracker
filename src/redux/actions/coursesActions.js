export const setCourses = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/courses")
        .then(r => r.json())
        .then(courses => dispatch({type: "SET_COURSES", payload: courses}))
    }
}

export const addCourse = (course) => {
    return (dispatch) => {
        fetch("http://localhost:3000/courses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json"
            },
            body: JSON.stringify(course)
        })
        .then(r => r.json())
        .then(course => dispatch({type: "ADD_COURSE", payload: course}))
    }
}

export const deleteCourse = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/courses/${id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then((data) => dispatch({type: "DELETE_COURSE", payload: id}))
    }
}

export const editCourse = (course) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/courses/${course.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(course)
        })
        .then(r => r.json())
        .then(course => dispatch({type: "EDIT_COURSE", payload: course}))
    }
}