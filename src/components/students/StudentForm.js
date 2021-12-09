import React, { Component } from 'react'
import { addStudent } from '../../redux/actions/studentsActions'
import { connect } from 'react-redux'

class StudentForm extends Component {

    state = {
        name: "",
        course_id: ""
    }

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleSelect = (e) => {
        this.setState({course_id: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatchAddStudent(this.state)
        this.setState({name: "", course_id: ""})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="student-name-input">Add a Student</label>
                <input id="student-name-input" 
                onChange={this.handleChange} 
                value={this.state.name} 
                type="text" />
                <select id="course-dropdown" onChange={this.handleSelect} value={this.state.course}>
                    {this.props.courses.map((course) => (
                        <option key={course.id} value={course.id}>{course.name}</option>
                    ))}
                </select>
                <input type="submit" />
                
            </form>
        )
    }
}

function maptStateToProps(state){
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchAddStudent: (student) => dispatch(addStudent(student))
    }
}

export default connect(maptStateToProps, mapDispatchToProps)(StudentForm)