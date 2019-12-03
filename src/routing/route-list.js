import {Route} from 'react-router-dom';
import App from '../App';
import LoginScreen from '../screens/login-screen';
import PrivateRoute from './private-route';
import React from 'react';
import NewsScreen from '../screens/news-screen';

export const routeList = [
    <Route exact path="/" component={App}/>,
    <Route exact path="/login" component={LoginScreen}/>,
    <Route exact path="/invalid" component={App}/>,
    <Route exact path="/news" component={NewsScreen}/>,
    <PrivateRoute nextUrl="/success" component={App}/>
];
