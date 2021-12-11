import React from 'react'
import DeleteStudent from './DeleteStudent'

const StudentCard = ({match, students}) => {

    if(students.length === 0) return null;

    let student = students.find(s => s.id === parseInt(match.params.id))


    return (
        <div>
           <h2>{student.name}</h2>
           <DeleteStudent />
        </div>
    )
}



export default StudentCard