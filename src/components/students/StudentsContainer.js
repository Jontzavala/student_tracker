import React from 'react';
import { connect } from 'react-redux';
import { setStudents } from '../../redux/actions/studentsActions';

class StudentsContainer extends React.Component {

    componentDidMount(){
        this.props.dispatchSetStudents()
    }

    render(){
        return (
            <div>
                All Students
                <div>
                    {this.props.students.map(student => <p key={student.id}>{student.name}</p>)}
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
function mapDispatchToProps(dispatch) {
    return {
        dispatchSetStudents: () => dispatch(setStudents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsContainer)