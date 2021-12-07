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