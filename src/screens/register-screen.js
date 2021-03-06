import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ErrorSnackbar } from "../components/error-snackbar";
import { Paper, Card } from "@material-ui/core";
import LaptopChromebookIcon from "@material-ui/icons/LaptopChromebook";
import Grid from "@material-ui/core/Grid";
import { withRouter } from "react-router-dom";
import registerService from "../services/register-service";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import subjectService from '../services/subjects-service';

const useStyles = theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
});

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarMessage: "",
      successRegister: undefined,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      group: "",
      repeatedPassword: "",
      departments: {},
      groups: {},
      selectedDepartment: "",
      selectedYear: "",
      selectedDeptID: "",
      yearSelectionDisabled: true,
      groupSelectionDisabled: true
    };
  }

  async componentDidMount() {
    const departments = await registerService.getDepartments();
    if (departments.status === 200) {
      this.setState({ departments: departments.data });
    } else {
      this.setState({ snackbarMessage: "Internal error! Departments could not be fetched!" });
    }
  }

  async componentDidUpdate() {
    if (this.state.selectedYear !== "") {
      const deptID = this.determineDepartmentID(this.state.selectedYear);
      if (deptID !== this.state.selectedDeptID) {
        const detereminedGroups = await registerService.getGroups(deptID);
        if (detereminedGroups.status === 200) {
          this.setState({
            groups: detereminedGroups.data,
            selectedDeptID: deptID
          });
        } else {
          this.setState({ snackbarMessage: "Internal error! Groups could not be fetched!" });
        }
      }
    }
  }

  createGroupsSelectItems() {
    let items = [];
    if (typeof this.state.groups !== "undefined") {
      for (let i = 0; i < this.state.groups.length; i++) {
        items.push(
          <MenuItem value={this.state.groups[i]}>
            {this.state.groups[i]}
          </MenuItem>
        );
      }
      return items;
    }
  }

  createDepartmentsSelectItems() {
    let items_deps = [];
    let items = [];
    for (let i = 0; i < this.state.departments.length; i++) {
      let item = this.state.departments[i];
      let depName = item.name;
      let exists = false;
      for (let j = 0; j < items_deps.length; j++) {
        if (depName == items_deps[j]) exists = true;
      }
      if (exists == false) {
        items_deps.push(depName);
      }
    }
    items_deps.sort();
    for (let k = 0; k < items_deps.length; k++) {
      items.push(<MenuItem value={items_deps[k]}>{items_deps[k]}</MenuItem>);
    }
    return items;
  }

  createYearsSelecItems() {
    let items = [];
    for (let year = 1; year <= 3; year++) {
      items.push(
        <MenuItem value={year.toLocaleString()}>
          {year.toLocaleString()}
        </MenuItem>
      );
    }
    return items;
  }

  changeIsTeacher(event) {
    this.setState({
      isTeacher: event.target.value
    });
  }

  changeFirstName(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  changeLastName(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  changeRepeatedPassword(event) {
    this.setState({
      repeatedPassword: event.target.value
    });
  }

  changeGroup(event) {
    this.setState({
      group: event.target.value
    });
  }

  async submitRegister(event) {
    event.preventDefault();

    const email = this.state.email;
    const firstName = this.state.firstName;
    const group = this.state.group;
    const lastName = this.state.lastName;
    const password = this.state.password;

    let fieldVerification = "";
    if (email == "") {
      fieldVerification += "Please input your SCS e-mail address. ";
    }
    if (firstName == "" || lastName == "") {
      fieldVerification += "Please input your full name in the corresponding fields. ";
    }
    if (group == "") {
      fieldVerification += "Please input your department, year and group information. ";
    }
    if (password.length < 8) {
      fieldVerification += "Chosen password is too simple! Please make sure it contains at least eight characters.";
    }
    if (password != this.state.repeatedPassword) {
      fieldVerification += "Passwords do not match!";
    }
      
    if (fieldVerification == "") {
      const result = await registerService.registerStudent(firstName, lastName, email, password, group);
      if (result.status === 201) {
        this.redirectToLogin(event);
      } else {
        let errorMessage = '';
        if (result.status === 409) {
          errorMessage = result.data.exceptions.message;
        } else {
          for (const msg in result.data.exceptions) {
            errorMessage += result.data.exceptions[msg].message;
            errorMessage += ". ";
          } 
        }
        this.setState({
          snackbarMessage: errorMessage,
          successRegister: false
        });
      }
    } else {
      this.setState({
        snackbarMessage: fieldVerification,
        successRegister: false
      });
    }
  }

  async redirectToLogin(event) {
    const login_path = "/login";
    //const sbjs = await subjectService.enrollAfterRegister();
    //console.log("Subjects registered", sbjs);
    this.props.history.push(login_path);
  }

  selectionDepartment(event) {
    this.setState({
      yearSelectionDisabled: false,
      selectedDepartment: event.target.value
    });
  }

  selectionYear(event) {
    const selectedYear = event.target.value;
    this.setState({
      groupSelectionDisabled: false,
      selectedYear: selectedYear
    });
  }

  determineDepartmentID(selectedYear) {
    let selectedDept = this.state.selectedDepartment;
    for (let i = 0; i < this.state.departments.length; i++) {
      let dept = this.state.departments[i].name;
      let year = this.state.departments[i].year;
      if (year == selectedYear && selectedDept == dept) {
        return this.state.departments[i].id.toLocaleString();
      }
    }
  }

  restardRegister() {
    this.setState({
      successRegister : undefined
    })
}

  render() {
    const classes = this.props.classes;
    const errorSnackBar = <ErrorSnackbar variant="error" message={this.state.snackbarMessage} onClose={this.restardRegister.bind(this)}/>;
    return (
      <div>
        <Container style={{marginBottom: '-50px'}} component="main" maxWidth="xs">
          <CssBaseline />
          <Paper
            style={{
              padding: "40px",
              boxShadow: "2px 2px 5px 5px rgba(0, 0, 0, .5)"
            }}
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LaptopChromebookIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Create Account
              </Typography>
              <form className={classes.form} noValidate>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="firstName"
                  autoFocus
                  onChange={this.changeFirstName.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lastName"
                  autoFocus
                  onChange={this.changeLastName.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={this.changeEmail.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                  autoFocus
                  onChange={this.changePassword.bind(this)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="repeatedPassword"
                  label="Repeat Password"
                  name="repeatedPassword"
                  type="password"
                  autoFocus
                  onChange={this.changeRepeatedPassword.bind(this)}
                />
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel id="departmentLabel">Department</InputLabel>
                  <Select
                    labelId="departmentLabel"
                    id="departmentSelect"
                    onChange={this.selectionDepartment.bind(this)}
                  >
                    {this.createDepartmentsSelectItems()}
                  </Select>
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel id="yearLabel">Study Year</InputLabel>
                  <Select
                    disabled={
                      this.state.yearSelectionDisabled ? "disabled" : ""
                    }
                    onChange={this.selectionYear.bind(this)}
                    labelId="yearLabel"
                    id="yearSelect"
                  >
                    {this.createYearsSelecItems()}
                  </Select>
                </FormControl>
                <FormControl fullWidth className={classes.formControl}>
                  <InputLabel id="groupLabel">Group</InputLabel>
                  <Select
                    disabled={
                      this.state.groupSelectionDisabled ? "disabled" : ""
                    }
                    onChange={this.changeGroup.bind(this)}
                    labelId="groupLabel"
                    id="groupSelect"
                    ref="groupSelect"
                  >
                    {this.createGroupsSelectItems()}
                  </Select>
                </FormControl> 
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{ backgroundColor: "#750080 " }}
                  onClick={this.submitRegister.bind(this)}
                >
                  Sign Up
                </Button>
                <Grid container>
                  <Grid item xs>
                    Have an acocunt already?
                  </Grid>
                  <Grid item xs>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      style={{ backgroundColor: "#750080 " }}
                      onClick={this.redirectToLogin.bind(this)}
                    >
                      Log In
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Paper>
        </Container>
        {this.state.successRegister === false ? errorSnackBar : null}
      </div>
    );
  }
}

export default withStyles(useStyles)(RegisterScreen);
