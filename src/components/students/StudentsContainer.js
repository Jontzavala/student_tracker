import React from 'react';
import { connect } from 'react-redux';
import StudentForm from './StudentForm';
import StudentCard from './StudentCard';

class StudentsContainer extends React.Component {


    render(){
        return (
            <div>
                <h2>All Students</h2>
                < StudentForm />
                <div>
                    {this.props.students.map(student => <StudentCard key={student.id} {...student} />)}
                </div>
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