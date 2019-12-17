import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 350,
    padding: 10,
    boxShadow: '2px 2px 5px 5px rgba(0, 0, 0, .5)'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

class PostAssignmentCard extends React.Component {
  constructor(props) {
    super(props);
  }

  navigateToTimetable(event) {
    this.props.history.push('/login');
  }

  render() {
    const classes = this.props.classes;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              Post Assignment
            </Typography>
            <Typography component="p">
              Post an assignment for one of the
              <br />
              classes that you are teaching.
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={this.navigateToTimetable.bind(this)} size="small">See Timetable</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(PostAssignmentCard);
