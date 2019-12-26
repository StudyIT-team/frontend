import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeIcon from '@material-ui/icons/Home';
import { Redirect } from 'react-router';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import {Link} from 'react-router-dom';
import LoginScreen from './screens/login-screen.js';

function App() {
  return (
    <div className="App">
      <Redirect exact from="/" to="/login" />
    </div>
  );
}

export default App;
