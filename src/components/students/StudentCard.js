import React from 'react'
import { deleteStudent } from '../../redux/actions/studentsActions'
import { connect } from 'react-redux'

function StudentCard(props) {

    function handleDelete(){
        props.deleteStudent(props.id)
    }


    return (
        <div>
           <span>{props.name}</span><button onClick={handleDelete}>X</button>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return {
        deleteStudent: (id) => dispatch(deleteStudent(id))
    }
}

export default connect(null, mapDispatchToProps)(StudentCard)