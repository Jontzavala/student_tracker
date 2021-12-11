import React from 'react'
import CoursesContainer from './containers/CoursesContainer'
import AllStudentsContainer from './containers/AllStudentsContainer'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <CoursesContainer/>
        <AllStudentsContainer/>
      </div>
    )
  }
}

export default App;