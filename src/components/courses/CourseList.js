import React from 'react'
import { Link } from 'react-router-dom'

const CourseList = ({courses}) =>{
    return (
        <div id='courses'>
            {courses.map(course =>
                <div className="card" key={course.id}>
                <Link to={`/courses/${course.id}`}>
                    <div>
                        <h4>{course.name}</h4>
                    </div>
                </Link>
                </div>
            )}
        </div>
    )
}

export default CourseList