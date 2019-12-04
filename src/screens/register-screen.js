import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ErrorSnackbar } from '../components/error-snackbar';
import { Paper, Card } from '@material-ui/core';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router-dom';
import registerService from '../services/register-service';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

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
            email: "",
            password: "",
            repeatedPassword: "",
            departments: {},
            isTeacher: false,
            hasRegistered: false,
            groupSelectedDisabled: true,
        }
    }

    async componentDidMount() {
        const departments = await registerService.getDepartments();
        this.setState({ departments: departments.data });
        this.createDepartmentsSelectItems();
    }

    createDepartmentsSelectItems() {
        let items_deps = [];
        let items = [];
        for( let i = 0; i < this.state.departments.length; i++) {
            let item = this.state.departments[i];
            let depName = item.name;
            let exists = false;
            for (let j = 0; j < items_deps.length; j++) {
                if (depName == items_deps[j])
                    exists = true;
            }
            if (exists == false) {
                items_deps.push(depName);
            }
        }
        items_deps.sort();
        for (let k = 0; k < items_deps.length; k++) {
            items.push(<MenuItem value = {k}>{items_deps[k]}</MenuItem>);
        }
        return items;
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

    changeEmail(event) {
        this.setState({
            email: event.target.value
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

    restartRegister() {
        this.setState({
            hasRegistered : undefined
        })
    }

    async submitRegister(event) {
        event.preventDefault();
        if (this.state.password != this.state.repeatedPassword) {
            alert("Passwords must match!"); 
            // TODO: handle this with snackbar
            return;
        }
        var userRole = "";
        if (this.state.isTeacher === true) {
            userRole = "Teacher";
        } else {
            userRole = "Student";
        }
        this.registerService.registerUser(this.state.firstName, this.state.lastName, this.state.email, userRole, "1");
    }

    redirectToLogin(event) {
        const login_path = '/login';
        this.props.history.push(login_path);
    }

    selectedDepartment(event) {
        this.setState( {groupSelectedDisabled: false} )
    }

    render() {
        const classes = this.props.classes;
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
                                    onChange = { this.changeFirstName.bind(this) }
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
                                    onChange = { this.changeLastName.bind(this) }
                                />
                                <TextField 
                                    variant = "outlined"
                                    margin  = "normal"
                                    required
                                    fullWidth
                                    id = "email"
                                    label = "E-mail"
                                    name = "email"
                                    autoComplete = "email"
                                    autoFocus
                                    onChange = { this.changeEmail.bind(this) }
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
                                    onChange = { this.changePassword.bind(this) }
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
                                    onChange = { this.changeRepeatedPassword.bind(this) }
                                />
                                <FormControl fullWidth className={classes.formControl}>
                                     <InputLabel id="departmentLabel"> 
                                        Department
                                    </InputLabel>
                                    <Select
                                        labelId = "departmentLabel"
                                        id = "departmentSelect" 
                                        onChange = { this.selectedDepartment.bind(this)} >
                                        {this.createDepartmentsSelectItems()}
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth className={classes.formControl}>
                                    <InputLabel id="yearLabel">
                                        Study Year
                                    </InputLabel>
                                    <Select
                                        disabled = {(this.state.groupSelectedDisabled? "disabled": "")}
                                        labelId = "yearLabel"
                                        id = "yearSelect" >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl fullWidth className={classes.formControl}>
                                     <InputLabel id="groupLabel"> 
                                        Group
                                    </InputLabel>
                                    <Select
                                        disabled = {(this.state.groupSelectedDisabled)? "disabled" : ""}
                                        labelId = "groupLabel"
                                        id = "groupSelect"
                                        ref = "groupSelect" >
                                        <MenuItem value={10}>931</MenuItem>
                                        <MenuItem value={20}>932</MenuItem>
                                        <MenuItem value={30}>933</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControlLabel 
                                    control = {<Checkbox value="remember" color="primary" />}
                                    label = "Teacher?"
                                />
                                <Button
                                    fullWidth
                                    variant = "contained"
                                    color = "primary"
                                    className = {classes.submit}
                                    style = {{ backgroundColor: "#750080 "}}
                                    onClick = {this.submitRegister.bind(this)} > Sign Up
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        Have an acocunt already?
                                    </Grid>
                                    <Grid item xs>
                                        <Button
                                            fullWidth
                                            variant = "contained"
                                            color = "primary"
                                            style = {{ backgroundColor: "#750080 "}}
                                            onClick = {this.redirectToLogin.bind(this)}
                                        >
                                            Log In
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Paper>
                </Container>
            </div>
        );
    }
}

export default withStyles(useStyles)(RegisterScreen);