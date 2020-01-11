

import React,{Component} from 'react';
import { routeList } from './route-list';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import NavBar from '../components/app-bar';

export default class AppRouter extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
            <NavBar/>
            <Router>
                {routeList}
            </Router>
            </div>
        );
    }
}