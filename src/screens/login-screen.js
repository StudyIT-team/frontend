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
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isTeacher: false,
            isLoggedIn: undefined
        }
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
    changeIsTeacher(event, isChecked) {

        this.setState({
            isTeacher: isChecked
        })
    }

    async submitLogin(event) {
        event.preventDefault();
        const isLoggedIn = await loginService.loginUser(this.state.username, this.state.password, this.state.isTeacher);
        if(isLoggedIn === false){
           this.setState({
                isLoggedIn: isLoggedIn
            });
            return;
        }
        this.props.history.push('/success');
    }

    hardcodedLoginDemo(event) {
        console.log(this.state.username);
        if (this.state.username == "rosian.adrian@cs.ubbcluj.ro" && this.state.password == "ppd123" && this.state.isTeacher == true) {
            this.setState({ isLoggedIn: true });
            this.props.history.push('/teacher');
        } else {
            if (this.state.username == "ccie2277@scs.ubbcluj.ro" && this.state.password == "test123" && this.state.isTeacher == false) {
                console.log("logged in");
                this.setState({ isLoggedIn: true });
                this.props.history.push('/student');
            } else {
                this.setState({
                    isLoggedIn: false
                });
            }
        }
    }

    restartLogin(){
        this.setState({
            isLoggedIn : undefined
        })
    }

    redirectToRegister() {
        const register_path = '/register';
        this.props.history.push(register_path);
    }

    render() {
        const classes = this.props.classes;
        const errorSnackBar = <ErrorSnackbar variant="error" message="Cannot log in. Try again!" onClose={this.restartLogin.bind(this)}/>;
        return (
            <div>
                <Container component="main" maxWidth="xs" >
                    <CssBaseline />
                    <Paper style={{padding: '40px', boxShadow: '2px 2px 5px 5px rgba(0, 0, 0, .5)'}}>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign In
                    </Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="User name"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                onChange={this.changeUsername.bind(this)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={this.changePassword.bind(this)}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" onChange={this.changeIsTeacher.bind(this)} />}
                                label="Teacher?"
                            />
                            <Grid container>
                                <Grid container>
                                    <Grid item xs>
                                        Don't have an account yet?
                                    </Grid>
                                    <Grid item xs>
                                        <Button
                                            fullWidth
                                            variant = "contained"
                                            color = "primary"
                                            style = {{ backgroundColor: "#750080 "}}
                                            onClick = {this.redirectToRegister.bind(this)} >
                                            Register
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Button
                                    // type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    style={{ backgroundColor: "#750080" }}
                                    onClick={this.hardcodedLoginDemo.bind(this)}>
                                        Sign In 
                                </Button>
                                <Grid item xs>
                                    We are glad to have you back!
                            </Grid>
                            </Grid>
                        </form>
                    </div>
                    </Paper>
                </Container>
                {this.state.isLoggedIn === false ? errorSnackBar : null}
            </div>
        );
    }
}
export default withStyles(useStyles)(LoginScreen);