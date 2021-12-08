import React from 'react';
import { connect } from 'react-redux';
import { setCourses } from '../../redux/actions/coursesActions';
import CourseForm from './CourseForm';
import CourseCard from './CourseCard';

class CoursesContainer extends React.Component {

    componentDidMount(){
        this.props.dispatchSetCourses()
    }

    render(){
        return (
            <div>
                <h2>All Courses</h2>
                <CourseForm />
                <div>
                    {this.props.courses.map(course => <CourseCard key={course.id} {...course} />)}
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
