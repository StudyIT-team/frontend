import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeIcon from '@material-ui/icons/Home';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
<<<<<<< HEAD
import {Link} from 'react-router-dom';

=======
import TimetableComponent from './components/time-table';
import { Container } from '@material-ui/core';
>>>>>>> e466db9141ac96979d6b6eeb2f555761c0ce3be1

function App() {
  return (
    <div className="App">
     <ul>
       <li>
         <Link to="/success">Success</Link>
       </li>
       <li>
         <Link to="/login">Login</Link>
       </li>
       <li>
         <Link to="/register">Register</Link>
       </li>
       <li>
         <Link to="/timetable">Timetable</Link>
       </li>
     </ul>

    </div>
  );
}

export default App;
