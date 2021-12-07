import React, { Component } from 'react'
import { addCourse } from '../../redux/actions/coursesActions'
import { connect } from 'react-redux'

class CourseForm extends Component {

    state = {
        name: ""
    }

    handleChange = (e) => {
        this.setState({name: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatchAddCourse(this.state)
        this.setState({name: ""})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="course-name-input">Add a Course</label>
                <input id="course-name-input" 
                onChange={this.handleChange} 
                value={this.state.name} 
                type="text" />
                <input type="submit" />
                
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchAddCourse: (course) => dispatch(addCourse(course))
    }
}

export default connect(null, mapDispatchToProps)(CourseForm)