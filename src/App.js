import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';


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
     </ul>
    </div>
  );
}

export default App;
