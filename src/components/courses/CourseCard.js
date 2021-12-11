import React from 'react'
import { deleteCourse } from '../../redux/actions/coursesActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function CourseCard(props) {

    function handleDelete(){
        props.deleteCourse(props.id)
    }

    
    return (
        <div>
           <Link to={`/courses/${props.id}`}>{props.name}</Link>
           <button onClick={handleDelete}>X</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        deleteCourse: (id) => dispatch(deleteCourse(id)),
    }
}

export default connect(null, mapDispatchToProps)(CourseCard)