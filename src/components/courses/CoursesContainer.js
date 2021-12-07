import React from 'react';
import { connect } from 'react-redux';
import { setCourses } from '../../redux/actions/coursesActions';

class CoursesContainer extends React.Component {

    componentDidMount(){
        this.props.dispatchSetCourses()
    }

    render(){
        return (
            <div>
                All Courses
                <div>
                    
                    {this.props.courses.map(course => <p key={course.id}>{course.name}</p>)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        courses: state.courses
    }
}
function mapDispatchToProps(dispatch) {
    return {
        dispatchSetCourses: () => dispatch(setCourses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer)
