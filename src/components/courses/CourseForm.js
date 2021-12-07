import React, { Component } from 'react'

export default class CourseForm extends Component {

    state = {
        name: ""
    }

    render() {
        return (
            <form>
                <label htmlFor="course-name-input">Add a Course</label>
                <input id="course-name-input" type="text" />
                <input type="submit" />
                
            </form>
        )
    }
}
