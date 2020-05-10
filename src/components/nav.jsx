import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";

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

    let history = useHistory();
    const routeHandler = (input) =>{

      if(input === 'home'){
        history.push("/")
      }

      if(input === 'tickets'){
        history.push("/tickets")
      }
      
    }

    const classes = useStyles();
    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            
              <Typography variant="h6" onClick={() => routeHandler('home')} className={classes.title}>
              Rail Exp
              </Typography>
          

            <Button color="inherit" onClick={() => routeHandler('tickets')}>Tickets</Button>
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