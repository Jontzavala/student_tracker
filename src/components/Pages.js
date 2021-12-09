import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CoursesContainer from './courses/CoursesContainer';
import StudentsContainer from './students/StudentsContainer';
import BehaviorsContainer from './behaviors/BehaviorsContainer'
import { setCourses } from '../redux/actions/coursesActions';
import { setStudents } from '../redux/actions/studentsActions';
import { connect } from 'react-redux';


class Pages extends React.Component {

    componentDidMount(){
        this.props.dispatchSetCourses()
        this.props.dispatchSetStudents()
    }


    render(){
        return (
            <Switch>
                <Route path="/courses" component={routerProps => <CoursesContainer routerProps={routerProps} />} />
                <Route path="/students" component={routerProps => <StudentsContainer routerProps={routerProps} />} />
                <Route path="/behaviors" component={routerProps => <BehaviorsContainer routerProps={routerProps} />} />
            </Switch>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        dispatchSetCourses: () => dispatch(setCourses()),
        dispatchSetStudents: () => dispatch(setStudents())
    }
}

export default connect(null, mapDispatchToProps)(Pages)
