import React from 'react'
import StudentsContainer from '../../containers/StudentsContainer'

const CourseShow = (props) => {
    if (props.courses.length === 0 ) return null;


    let courseShow = props.courses.filter(course => course.id === props.match.params.id)[0]
    return (
        <div>
            <h1>{courseShow ? courseShow.name : null}</h1>
            <div> <StudentsContainer courseShow={courseShow} /></div>

        </div>
    )
}
export default CourseShow