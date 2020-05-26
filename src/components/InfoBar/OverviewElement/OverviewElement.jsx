import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const container= {
    margin: '30px 0px 0px 0px'
}

const useStyles = makeStyles({
    root: {
      fontSize: '1.0rem',
      
      display: "flex",
      flexDirection: "row",
      justifyContent: "left"
    },
    names: {
      paddingTop: '7px',
      width: '100px',
    },
  });

const OverviewElement = (props) => {

    const classes = useStyles();

    return(
      <Fragment>
        <Grid container className={classes.root}>
          <Grid item lg={2} className={classes.names}>
            {props.label}
          </Grid>
          <Grid item lg={8}>
            <ListItem>
              <ListItemText primary={props.value} />
            </ListItem>
          </Grid>
        </Grid>
      </Fragment>
    )
}

export default OverviewElement;