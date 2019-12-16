// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Typography from '@material-ui/core/Typography';
// import { withStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { ErrorSnackbar } from '../components/error-snackbar';
// import { Paper, Card } from '@material-ui/core';
// import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
// import Grid from '@material-ui/core/Grid';
// import { withRouter } from 'react-router-dom';
// import newsService from '../services/news-service';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';

// const useStyles = theme => ({
//     '@global': {
//         body: {
//             backgroundColor: theme.palette.common.white,
//         },
//     },
//     paper: {
//         marginTop: theme.spacing(8),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', 
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// });

// class TeacherNewsScreen extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             content: "",
//             title: "",
//             datetime: "",
//             selectedSubject: "",
//             subjectSelectionDisabled: true,
//         }
//     }

//     async componentDidMount() {
//         const subjects = await newsService.getSubjects();
//         console.log(subjects)
//         this.setState({ subjects: subjects.data });
//     }

//     createSubjectSelectItems() {
//         let items = [];
//         if (typeof this.state.subjects !== "undefined") {
//             for ( let i = 0; i < this.state.subjects.length; i++) {
//                 items.push(<MenuItem value = {this.state.subjects[i]}>{this.state.subjects[i]}</MenuItem>);
//             }
//             return items;
//         }
//     }

//     changeTitle(event) {
//         this.setState({
//             title: event.target.value
//         })
//     }

//     changeContent(event) {
//         this.setState({
//             content: event.target.value
//         })
//     }

//     changeSubject(event) {
//         this.setState({
//             subject: event.target.value
//         })
//     }

//     async submitNews(event) {
//         event.preventDefault();
//         const title=this.state.title;
//         const content=this.state.content;
//         const subjectId=this.state.subjectId;
//         const result=await newsService.createNews(title,content,subjectId);
//         console.log(result);
//         console.log(title);
        
//     }

//     selectionSubject(event) {
//         this.setState( {subjectSelectionDisabled: false, selectedSubject: event.target.value } );
//     }

//     determineSubjectID() {
//         let selectedSubject = this.state.selectedSubject;
//         for( let i = 0; i < this.state.subjects.length; i++) {
//             let subject = this.state.subjects[i].name;
//             if (selectedSubject == subject) {
//                 return this.state.subjects[i].id.toLocaleString()};
//         }
//     }

//     render() {
//         const classes = this.props.classes;
//         return (
//             <div> 
//                 <Container >
//                     <CssBaseline />
//                     <Paper style={{padding: '40px',  boxShadow: '2px 2px 5px 5px rgba(0, 0, 0, .5)' }}>
//                         <div className={classes.paper}>
//                             <Typography component="h1" variant="h5">
//                                 Post something
//                             </Typography>
//                             <form className={classes.form} noValidate>
//                                 <TextField 
//                                     variant = "outlined"
//                                     margin  = "normal"
//                                     required
//                                     fullWidth
//                                     id = "title"
//                                     label = "Title"
//                                     name = "title"
//                                     autoComplete = "title"
//                                     autoFocus
//                                     onChange = { this.changeTitle.bind(this) }
//                                 />
//                                 <TextField
//                                     variant = "outlined"
//                                     margin = "normal"
//                                     required
//                                     fullWidth
//                                     id = "content"
//                                     label = "Content"
//                                     name = "content"
//                                     autoComplete = "content"
//                                     autoFocus
//                                     onChange = { this.changeContent.bind(this) }
//                                 />
                                
//                                 <FormControl fullWidth className={classes.formControl}>
//                                      <InputLabel id="subjectLabel"> 
//                                         Subject
//                                     </InputLabel>
//                                     <Select
//                                         labelId = "subjectLabel"
//                                         id = "subjectSelect" 
//                                         onChange = { this.selectionSubject.bind(this)} >
//                                         {/* {this.createSubjectSelectItems()} */}
//                                         <MenuItem value={10}>Computer Science in English</MenuItem>
//                                         <MenuItem value={20}>Computer Science in Romanian</MenuItem>
//                                         <MenuItem value={30}>Mathematics in German</MenuItem>
//                                     </Select>
//                                 </FormControl>
                                
//                                 <Button
//                                     fullWidth
//                                     variant = "contained"
//                                     color = "primary"
//                                     className = {classes.submit}
//                                     style = {{ backgroundColor: "#750080 "}}
//                                     onClick = {this.submitNews.bind(this)} > Post
//                                 </Button>
                                
//                             </form>
//                         </div>
//                     </Paper>
//                 </Container>
//             </div>
//         );
//     }
// }

// export default withStyles(useStyles)(TeacherNewsScreen);

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
import newsService from '../services/news-service';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TeacherNewsFeed from '../components/teacher-news-feed';

class TeacherNewsScreen extends React.Component {
   
    render() {
        return(
            <Container component="main" maxWidth="xs" >
                 <CssBaseline />
                    <TeacherNewsFeed/>
                 {/* <Searchbar/>
                 <NewsPost/>
                 <br></br>
                <NewsPost/>
                <NewsPost/>
                <NewsPost/> */}
            </Container>
            
        );
    }
}
export default TeacherNewsScreen;