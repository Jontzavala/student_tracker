import React from 'react';
import { connect } from 'react-redux';
import CourseForm from './CourseForm';
import CourseCard from './CourseCard';

class CoursesContainer extends React.Component {


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


export default connect(mapStateToProps)(CoursesContainer)
