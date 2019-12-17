import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { Paper, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
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
    display: "flex",
    alignItems: "center"
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
    boxShadow: "2px 2px 5px 5px rgba(0, 0, 0, .5)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

class StudentLanding extends React.Component {
  constructor(props) {
    super(props);
  }

  navToTimeTable(event) {
    this.props.history.push("/timetable");
  }

  navToEnroll(event) {
    this.props.history.push("/subjects");
  }

  navToPostNews(event) {
    this.props.history.push("/news");
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
                    Submit Assignment
                  </Typography>
                  <Typography component="p">
                    Turn in an assignment for one of the classes that you are
                    taking.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Turn In Homework</Button>
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
                    that you are taking this week.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={this.navToTimeTable.bind(this)} size="small">
                    See Timetable
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Grid>

          <Grid className={classes.gridElem} item md={2}>
            <div>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary">
                    Announcements
                  </Typography>
                  <Typography component="p">
                    See important news regarding of
                    <br />
                    the classes that you are taking.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={this.navToPostNews.bind(this)} size="small">
                    See News
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
        </Grid>

        <Grid className={classes.paper} container spacing={30}>
          <Grid className={classes.gridElem} item md={2}>
            <div>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary">
                    Attendance Sheet
                  </Typography>
                  <Typography component="p">
                    View attendances and grades you have for each of your
                    classes.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View Attendance</Button>
                </CardActions>
              </Card>
            </div>
          </Grid>

          <Grid className={classes.gridElem} item md={2}>
            <div>
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary">
                    Subjects
                  </Typography>
                  <Typography component="p">
                    Visualize mandatory and optional classes you are enrolled
                    in.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={this.navToEnroll.bind(this)} size="small">
                    View Subjects
                  </Button>
                </CardActions>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(StudentLanding);
