import React from 'react'
import { Link } from 'react-router-dom'

const Students = props => {

    const students = props.students.map((student, index) => {
        return <div key={index} className="card">
                    <Link to={`/students/${student.id}`}>
                        <div className='container'>
                            <h2>{student.name}</h2>
                        </div>
                    </Link>
                </div>
    })

    return (
        <div id="allstudents">
            <h2>Here are all your Students</h2>
            {students}
        </div>
    )
}

export default Students