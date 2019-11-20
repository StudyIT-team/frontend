import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ErrorSnackbar } from '../components/error-snackbar';
import { Paper, Card } from '@material-ui/core';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';


const useStyles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', 
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            repeatedPassword: "",
            isTeacher: false,
            hasRegistered: false,
        }
    }

    changeFirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    changeLastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }

    changeUsername(event) {
        this.setState({
            username: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    changeRepeatedPassword(event) {
        this.setState({
            repeatedPassword: event.target.value
        })
    }

    changeIsTeacher(event) {
        this.setState({
            isTeacher: event.target.value
        })
    }

    async submitRegister(event) {
        event.preventDefault();
        
    }

    render() {
        const classes = this.props.classes;
        // error snackbar
        return (
            <div>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Paper style={{padding: '40px',  boxShadow: '2px 2px 5px 5px rgba(0, 0, 0, .5)' }}>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LaptopChromebookIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Create Account
                            </Typography>
                            <form className={classes.form} noValidate>
                                <TextField 
                                    variant = "outlined"
                                    margin  = "normal"
                                    required
                                    fullWidth
                                    id = "firstName"
                                    label = "First Name"
                                    name = "firstName"
                                    autoComplete = "firstName"
                                    autoFocus
                                    onChange
                                />
                                <TextField
                                    variant = "outlined"
                                    margin = "normal"
                                    required
                                    fullWidth
                                    id = "lastName"
                                    label = "Last Name"
                                    name = "lastName"
                                    autoComplete = "lastName"
                                    autoFocus
                                    onChange 
                                />
                                <TextField 
                                    variant = "outlined"
                                    margin  = "normal"
                                    required
                                    fullWidth
                                    id = "username"
                                    label = "Username"
                                    name = "username"
                                    autoComplete = "username"
                                    autoFocus
                                    onChange
                                />
                                <TextField 
                                    variant = "outlined"
                                    margin = "normal"
                                    required
                                    fullWidth
                                    id = "password"
                                    label = "Password"
                                    name = "password"
                                    type = "password"
                                    autoFocus
                                    onChange
                                />
                                <TextField 
                                    variant = "outlined"
                                    margin = "normal"
                                    required
                                    fullWidth
                                    id = "repeatedPassword"
                                    label = "Repeat Password"
                                    name = "repeatedPassword"
                                    type = "password"
                                    autoFocus
                                    onChange
                                />
                                <FormControlLabel 
                                    control = {<Checkbox value="remember" color="primary" />}
                                    label = "Teacher?"
                                />
                                <Button
                                    type = "submit"
                                    fullWidth
                                    variant = "contained"
                                    color = "primary"
                                    className = {classes.submit}
                                    style = {{ backgroundColor: "#750080 "}}
                                    // onClick = {this.submitRegister.bind(this)} > Sign Up
                                    > Sign Up
                                </Button>
                            </form>
                        </div>
                    </Paper>
                </Container>
                <TextField></TextField>
            </div>
        )
    }
}

export default withStyles(useStyles)(RegisterScreen);