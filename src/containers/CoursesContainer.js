import React from 'react';
import { connect } from 'react-redux';
import {setCourses} from '../redux/actions/coursesActions'
import CourseList from '../components/courses/CourseList'
import CourseForm from '../components/courses/CourseForm';
import CourseCard from '../components/courses/CourseCard';
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage'
import { Switch, Route } from 'react-router-dom'

class CoursesContainer extends React.Component {

    componentDidMount(){
        this.props.dispatchSetCourses()
    }


    render(){
        return (
            <div>
                <NavBar/>
                <div id="wrapper">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/courses" render={(routerProps) => <CourseList {...routerProps} courses={this.props.courses} />}/>
                    <Route path="/courses/new" component={CourseForm} />
                    <Route path="/courses/:id" render={(routerProps) => <CourseCard {...routerProps} courses={this.props.courses} />}/>
                </Switch>
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

function mapDispatchToProps(dispatch){
    return {
       dispatchSetCourses: () => dispatch(setCourses()) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer)
