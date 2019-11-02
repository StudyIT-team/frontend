import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <p>Something</p>
     <ul>
       <li>
         <Link to="/success">Success</Link>
       </li>
       <li>
         <Link to="/login">Login</Link>
       </li>
     </ul>
    </div>
  );
}

export default App;
