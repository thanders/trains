import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Smoke from './Smoke/Smoke';
import Train from './Train/Train';
const LoaderTrain = (props) => {

  const useStyles = makeStyles({

    container: {
      marginTop: '0px',
      background: 'linear-gradient(0deg, #62a0d8 0%, #2178d1 50%, #085cb3 100%)',
      border: 'none black',
      width:'100%',
      height:'300px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',

    },
    trainRoot: {
      border: 'none black',
      width:'500px',
      height:'300px',
      left: '50%',
      top: '0%',
      marginTop: '0px',
      margin: '0 auto',
      position: 'flex',

    },
  });

  const classes = useStyles();
return(
  <Fragment>
    <Grid container className={classes.container} xs={12} md={12} spacing={4} justify="space-between">
      <div className={classes.trainRoot}>
          <Smoke />
          <Train />
      </div>
    </Grid>
  </Fragment>
  )
}

export default LoaderTrain;