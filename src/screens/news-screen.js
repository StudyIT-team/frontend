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
import NewsFeed from '../components/news-feed';

class NewsScreen extends React.Component {
   
    render() {
        return(
            <Container component="main" maxWidth="xs" >
                 <CssBaseline />
                    <NewsFeed/>
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
export default NewsScreen;