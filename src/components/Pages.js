import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CoursesContainer from './courses/CoursesContainer';

export default function pages() {
    return (
        <Switch>
            <Route path="/courses" component={routerProps => <CoursesContainer routerProps={routerProps} />} />
        </Switch>
    )
}
