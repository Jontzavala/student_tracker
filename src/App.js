import './App.css';
import { NavLink } from 'react-router-dom'
import Pages from './components/Pages'

function App() {
  return (
    <div className="App">
      <NavLink to="/">Home</NavLink>
      <br />
      <NavLink to="/courses">Courses</NavLink>
      <br />
      <NavLink to="/students">Students</NavLink>
      <br />
      <NavLink to="/behaviors">Behaviors</NavLink>
      <br />
      <Pages />
    </div>
  );
}

export default App;