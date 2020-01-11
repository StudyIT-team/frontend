import {Route} from 'react-router-dom';
import App from '../App';
import LoginScreen from '../screens/login-screen';
import RegisterScreen from '../screens/register-screen';
import PrivateRoute from './private-route';
import React from 'react';
import NewsScreen from '../screens/news-screen';
import TimetableScreen from '../screens/timetable-screen';
import StudentSubjectScreen from '../screens/subject-student-screen';

export const routeList = [
    <Route exact path="/" component={App}/>,
    <Route  path="/login" component={LoginScreen}/>,
    <Route  path="/register" component={RegisterScreen}/>,
    <Route  path="/news" component={NewsScreen}/>,
    <Route path="/subject-details" component={StudentSubjectScreen}/>,
    <PrivateRoute nextUrl="/timetable" component={TimetableScreen}/>,
  

];
