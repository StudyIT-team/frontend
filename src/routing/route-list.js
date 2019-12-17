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
import TeacherAssignmentsScreen from '../screens/teacher-assignments-screen';
import TeacherSubjectsScreen from '../screens/teacher-subjects-screen';
import SubjectsScreen from '../screens/subjects-screen';
import TeacherLanding from '../screens/demo-teacher-landing';
import TeacherTimetable from '../screens/teacher-timetable-screen';

export const routeList = [
    <Route exact path="/" component={App}/>,
    <Route exact path="/login" component={LoginScreen}/>,
    <Route exact path="/register" component={RegisterScreen}/>,
    <Route exact path="/invalid" component={App}/>,
    <Route exact path="/teacher" component={TeacherLanding}/>,
    <Route exact path="/news" component={NewsScreen}/>,
    <Route exact path="/teacher-news" component={TeacherNewsScreen}/>,
    <Route exact path="/teacher-assignment" component={TeacherAssignmentsScreen}/>,
    <Route exact path="/teacher-subjects" component={TeacherSubjectsScreen}/>,
    <Route exact path="/teacher-timetable" component={TeacherTimetable}/>,
    <Route exact path="/subjects" component={SubjectsScreen}/>,
    <PrivateRoute nextUrl="/timetable" component={TimetableScreen}/>,
    <PrivateRoute nextUrl="/success" component={App}/>
];
