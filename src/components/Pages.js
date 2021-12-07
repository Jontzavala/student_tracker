import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CoursesContainer from './courses/CoursesContainer';
import StudentsContainer from './students/StudentsContainer';
import BehaviorsContainer from './behaviors/BehaviorsContainer'

export default function pages() {
    return (
        <Switch>
            <Route path="/courses" component={routerProps => <CoursesContainer routerProps={routerProps} />} />
            <Route path="/students" component={routerProps => <StudentsContainer routerProps={routerProps} />} />
            <Route path="/behaviors" component={routerProps => <BehaviorsContainer routerProps={routerProps} />} />
        </Switch>
    )
}
