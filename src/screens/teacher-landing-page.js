import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Paper, Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";


const useStyles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        marginLeft: theme.spacing(42),
        marginBottom: -20,
        maxWidth: 1200,
        display: 'flex',
        alignItems: 'center',
    },
    gridElem: {
        marginTop: 20,
        marginLeft: 30,
        marginRight: 20
    },
    card: {
        maxWidth: 200,
        maxHeight: 200,
        padding: 10,
        boxShadow: '2px 2px 5px 5px rgba(0, 0, 0, .5)'
    },
    title: {
        marginBottom: 16,
        fontSize: 14
      },
      pos: {
        marginBottom: 12
      }
});

class TeacherLanding extends React.Component {
    constructor(props) {
        super(props);
    }

    navToTimeTable(event) {
        this.props.history.push('/teacher-timetable');
    }

    navToPostAssignment(event) {
        this.props.history.push('/teacher-assignment');
    }

    navToPostNews(event) {
        this.props.history.push('/teacher-news');
    }

    render() {
        const classes = this.props.classes;
        return (
            <div>
                <Grid className={classes.paper} container spacing={30}>
                    <Grid className={classes.gridElem} item md={2}>
                        <div>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary">
                                        Post Assignment
                                    </Typography>
                                    <Typography component="p">
                                        Post an assignment for one of the
                                        classes that you are teaching.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={this.navToPostAssignment.bind(this)} size="small">Post Assignment</Button>
                                </CardActions>
                                </Card>
                            </div>
                    </Grid>

                    <Grid className={classes.gridElem} item md={2}>
                        <div>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary">
                                        Schedule
                                    </Typography>
                                    <Typography component="p">
                                        Timetable with all the classes
                                        <br />
                                        that you have to teach this week.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={this.navToTimeTable.bind(this)} size="small">See Timetable</Button>
                                </CardActions>
                                </Card>
                            </div>
                    </Grid>

                    <Grid className={classes.gridElem} item md={2}>
                        <div>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary">
                                        Post Announcement
                                    </Typography>
                                    <Typography component="p">
                                        Post news regarding of
                                        <br />
                                        the classes that you are teaching.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={this.navToPostNews.bind(this)} size="small">Post Announcement</Button>
                                </CardActions>
                                </Card>
                            </div>
                    </Grid>
                </Grid>

                {/* <Grid className={classes.paper} container spacing={30}>
                    <Grid className={classes.gridElem} item md={2}>
                        <div>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary">
                                        Mark Attendance
                                    </Typography>
                                    <Typography component="p">
                                        Mark the attendance of students at a class
                                        you teach!
                                    </Typography>
                                   </CardContent>
                                <CardActions>
                                    <Button size="small">Attendance Sheet</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Grid>
                    
                    <Grid className={classes.gridElem} item md={2}>
                            <div>
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary">
                                            Grade Assignments
                                        </Typography>
                                        <Typography component="p">
                                            View and correct recently submitted
                                            <br />
                                            homework for your assignments.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View Homework</Button>
                                    </CardActions>
                                </Card>
                            </div>
                    </Grid>
                </Grid> */}

            </div>
        );
    }
}

export default withStyles(useStyles)(TeacherLanding);