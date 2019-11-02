import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from "@material-ui/styles";

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 5,
    },
    title: {
      flexGrow: 1,
    },
  });

class NavBar extends React.Component{
    
    render(){
        const classes = this.props.classes;
        return (<AppBar position="static">
        <Toolbar style={{backgroundColor: "#750080"}}>
          <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            StudyIT
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        );
    }
}

export default withStyles(useStyles)(NavBar);