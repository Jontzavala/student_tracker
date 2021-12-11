import React from 'react'
import DeleteStudent from './DeleteStudent'
import { Link } from 'react-router-dom'

const StudentsList = ({courseId, students}) => {
    if (students.length === 0) return null;

    const s = students.filter(student => student.course_id === courseId)

    return (
        <div id="studentlist">
            {s && s.map(student =>
                <div className="card" key={student.id}>
                    <div className="container">
                        <Link to={`/students/${student.id}`}>{student.name}</Link><br/><br/>

                        <DeleteStudent student={student}/>
                    </div>
                </div>
            )}

        </div>
    )
}

export default StudentsList