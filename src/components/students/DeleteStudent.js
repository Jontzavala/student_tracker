import React from 'react';
import {connect} from 'react-redux'
import {deleteStudent} from '../../redux/actions/studentsActions'
const DeleteStudent = (props) => {
    
    const handleDelete = (student) => {
        
        props.deleteStudent(student.id, student.course_id)
    }

    let student = props.student

 return (
     <button onClick={() => handleDelete(student)}>Delete Student</button>
 )

}
export default connect(null,{deleteStudent})(DeleteStudent)