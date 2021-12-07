export const setBehaviors = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/behaviors")
        .then(r => r.json())
        .then(behaviors => dispatch({type: "SET_BEHAVIORS", payload: behaviors}))
    }
}