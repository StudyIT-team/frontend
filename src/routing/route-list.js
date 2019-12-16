import {Route} from 'react-router-dom';
import App from '../App';
import LoginScreen from '../screens/login-screen';
import RegisterScreen from '../screens/register-screen';
import PrivateRoute from './private-route';
import React from 'react';
import TableNew from '../components/table';
import NewsScreen from '../screens/news-screen';
import TimetableScreen from '../screens/timetable-screen';
import TeacherNewsScreen from '../screens/teacher-news-screen';
import SubjectsScreen from '../screens/subjects-screen';

export const routeList = [
    <Route exact path="/" component={App}/>,
    <Route exact path="/login" component={LoginScreen}/>,
    <Route exact path="/register" component={RegisterScreen}/>,
    <Route exact path="/invalid" component={App}/>,
    <Route exact path="/news" component={NewsScreen}/>,
    <Route exact path="/teacher-news" component={TeacherNewsScreen}/>,
    <Route exact path="/subjects" component={SubjectsScreen}/>,
    <PrivateRoute nextUrl="/timetable" component={TimetableScreen}/>,
    <PrivateRoute nextUrl="/success" component={App}/>
];
