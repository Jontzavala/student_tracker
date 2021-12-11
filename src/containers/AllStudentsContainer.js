import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import { setStudents } from '../redux/actions/studentsActions'
import StudentCard from '../components/students/StudentCard'
import AllStudents from '../components/students/AllStudents'

class AllStudentsContainer extends Component {

    componentDidMount() {
        this.props.dispatchSetStudents();
    }


    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/students" render={(props) => <AllStudents {...props} students={this.props.students} />}/>
                    <Route exact path="/students/:id" render={(props) => <StudentCard {...props} students={this.props.students} />}/>
                </Switch>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        students: state.students
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchSetStudents: () => dispatch(setStudents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudentsContainer)
