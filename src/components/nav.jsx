import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link,} from "react-router-dom";

const linkStyle={
  textDecoration: 'none',
  color: 'white',
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const Nav = () => {
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" style={linkStyle}>
              <Typography variant="h6" className={classes.title}>
              Railroad enthusiasts
              </Typography>
            </Link>
            <Link to="/tickets" style={linkStyle}>

            <Button color="inherit">Tickets</Button>
            </Link>
            <Button color="inherit">Travel insurance</Button>
          </Toolbar>
        </AppBar>

        <AppBar color="secondary" position="static">
          <Toolbar>
            <Button color="inherit">Train stations</Button>
            <Button color="inherit">Heritage trains</Button>
            <Button color="inherit">Technology</Button>
            <Button color="inherit">News</Button>
          </Toolbar>
        </AppBar>
      </div>
  
    )
  };
  
  export default Nav;