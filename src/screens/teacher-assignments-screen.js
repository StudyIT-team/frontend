import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import loginService from '../services/login-service';
import { ErrorSnackbar } from '../components/error-snackbar';
import { Paper, Card } from '@material-ui/core';
import AssignmentList from '../components/assignment-list';

class TeacherAssignmentsScreen extends React.Component {
   
    render() {
        return(
            // <Container component="main" maxWidth="sm" >
            <Container className="scrollable-auto">
                 <CssBaseline />
                    <AssignmentList/>
                 
            </Container>
            
        );
    }
}
export default TeacherAssignmentsScreen;