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
import newsService from '../services/news-service';
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
        width:'80vh',
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

class TeacherNewsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            content:"",
            
        }
    }
    changeTitle(event){
        this.setState({
            title:event.target.title
        })
    }
    changeContent(event){
        this.setState({
            content:event.target.content
        })
    }
   
    // async submitNews(event) {
    //     // event.preventDefault();
    //     this.newsService.createNews(this.state.title,this.state.content);
    // }

    selectedSubject(event) {
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
                            <Typography component="h1" variant="h5">
                                Create a post
                            </Typography>
                            <form className={classes.form} noValidate>
                                <TextField 
                                    variant = "outlined"
                                    margin  = "normal"
                                    required
                                    fullWidth
                                    id = "title"
                                    label = "Title"
                                    name = "title"
                                    autoComplete = "title"
                                    autoFocus
                                    //onChange = { this.changeTitle.bind(this) }
                                />
                                <TextField
                                    variant = "outlined"
                                    margin = "normal"
                                    required
                                    fullWidth
                                    id = "content"
                                    label = "Content"
                                    name = "content"
                                    autoComplete = "content"
                                    autoFocus
                                    //onChange = { this.changeContent.bind(this) }
                                />
                                
                                <FormControl fullWidth className={classes.formControl}>
                                     <InputLabel id="subjectLabe"> 
                                        Subject
                                    </InputLabel>
                                    <Select
                                        labelId = "subjectLabel"
                                        id = "subjectSelect" >
                                        {/* onChange = { this.selectedSubject.bind(this)} > */}
                                        <MenuItem value={10}>General</MenuItem>
                                        <MenuItem value={20}>Analiza</MenuItem>
                                        <MenuItem value={30}>Programare Logica si Functionala</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button
                                    fullWidth
                                    variant = "contained"
                                    color = "primary"
                                    className = {classes.submit}
                                    style = {{ backgroundColor: "#750080 "}}>Submit
                                    {/* // onClick = {this.submitNews.bind(this)} > Submit */}
                                </Button>
                                {/* <Grid container>
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
                                </Grid> */}
                            </form>
                        </div>
                    </Paper>
                </Container>
            </div>
        );
    }
}

export default withStyles(useStyles)(TeacherNewsScreen);