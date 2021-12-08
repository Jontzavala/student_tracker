import React from 'react'
import { deleteCourse } from '../../redux/actions/coursesActions'
import { connect } from 'react-redux'

function CourseCard(props) {

    function handleDelete(){
        props.deleteCourse(props.id)
    }


    return (
        <div>
           <span>{props.name}</span><button onClick={handleDelete}>X</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        deleteCourse: (id) => dispatch(deleteCourse(id))
    }
}

export default connect(null, mapDispatchToProps)(CourseCard)