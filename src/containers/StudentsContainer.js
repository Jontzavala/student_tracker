import React from 'react';
import { connect } from 'react-redux';
import StudentForm from '../components/students/StudentForm';
import StudentList from '../components/students/StudentList'

class StudentsContainer extends React.Component {


    render(){
        return (
            <div id='students'>
                < StudentList students={this.props.students} courseId={this.props.course.id} />
                <StudentForm course={this.props.course} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        students: state.students
    }
}


export default connect(mapStateToProps)(StudentsContainer)