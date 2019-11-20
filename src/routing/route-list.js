import {Route} from 'react-router-dom';
import App from '../App';
import LoginScreen from '../screens/login-screen';
import PrivateRoute from './private-route';
import React from 'react';
import TableNew from '../components/table';

export const routeList = [
    <Route exact path="/" component={App}/>,
    <Route exact path="/login" component={LoginScreen}/>,
    <Route exact path="/invalid" component={App}/>,
    <Route exact path="/subjects" component={TableNew}/>,
    <PrivateRoute nextUrl="/success" component={App}/>
];
