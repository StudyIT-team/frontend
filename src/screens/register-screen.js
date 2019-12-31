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
      snackbarMessage: "teehee",
      successRegister: undefined,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      group: "",
      repeatedPassword: "",
      departments: [{"id":1,"name":"Matematica Romana","year":1},{"id":2,"name":"Matematica Romana","year":2},{"id":3,"name":"Matematica Romana","year":3},{"id":4,"name":"Informatica Romana","year":1},{"id":5,"name":"Informatica Romana","year":2},{"id":6,"name":"Informatica Romana","year":3},{"id":7,"name":"Matematica-Informatica Romana","year":1},{"id":8,"name":"Matematica-Informatica Romana","year":2},{"id":9,"name":"Matematica-Informatica Romana","year":3},{"id":10,"name":"Matematica Maghiara","year":1},{"id":11,"name":"Matematica Maghiara","year":2},{"id":12,"name":"Matematica Maghiara","year":3},{"id":13,"name":"Informatica Maghiara","year":1},{"id":14,"name":"Informatica Maghiara","year":2},{"id":15,"name":"Informatica Maghiara","year":3},{"id":16,"name":"Matematica-Informatica Maghiara","year":1},{"id":17,"name":"Matematica-Informatica Maghiara","year":2},{"id":18,"name":"Matematica-Informatica Maghiara","year":3},{"id":19,"name":"Informatica Germana","year":1},{"id":20,"name":"Informatica Germana","year":2},{"id":21,"name":"Informatica Germana","year":3},{"id":22,"name":"Matematica-Informatica Engleza","year":1},{"id":23,"name":"Matematica-Informatica Engleza","year":2},{"id":24,"name":"Matematica-Informatica Engleza","year":3},{"id":25,"name":"Informatica Engleza","year":1},{"id":26,"name":"Informatica Engleza","year":2},{"id":27,"name":"Informatica Engleza","year":3}],
      groups: ["911/1","911/2","912/1","912/2","913/1","913/2","914/1","914/2","915/1","915/2","916/1","916/2","917/1","917/2"],
      selectedDepartment: "",
      selectedYear: "",
      selectedDeptID: "",
      yearSelectionDisabled: true,
      groupSelectionDisabled: true
    };
  }

  // async componentDidMount() {
  //   const departments = await registerService.getDepartments();
  //   this.setState({ departments: departments.data });
  // }

  // async componentDidUpdate() {
  //   if (this.state.selectedYear !== "") {
  //     const deptID = this.determineDepartmentID(this.state.selectedYear);
  //     if (deptID !== this.state.selectedDeptID) {
  //       const detereminedGroups = await registerService.getGroups(deptID);
  //       this.setState({
  //         groups: detereminedGroups.data,
  //         selectedDeptID: deptID
  //       });
  //     }
  //   }
  // }

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
    if (this.state.password != this.state.repeatedPassword) {
      alert("Passwords must match!");
      return;
    } else {
      alert("Account created successfully!");
      // if (!this.state.isTeacher) {
      //     const email = this.state.email;
      //     const firstName = this.state.firstName;
      //     const group = this.state.group;
      //     const lastName = this.state.lastName;
      //     const password = this.state.password;

      //     const result = await registerService.registerStudent(firstName, lastName, email, password, group);
      //     console.log(result);
      // }
    }
  }

  redirectToLogin(event) {
    const login_path = "/login";
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
