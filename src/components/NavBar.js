import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div id='name'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/courses'>Courses</Link></li>
                <li><Link to='/courses/new'>Create a Course</Link></li>
                <li><Link to='/students'>Students</Link></li>
            </ul>
        </div>
    )
}

export default NavBar