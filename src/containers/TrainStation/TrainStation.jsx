import React, {Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InfoBar from '../../components/InfoBar/InfoBar';
const container= {
    margin: '30px 0px 0px 0px'
}

const useStyles = makeStyles({
    root: {
        padding: '0px',
        margin: '0px'
    },
  });

const TrainStation = (props) => {

    const classes = useStyles();
    console.log('TS....', props.trainStation);

return(
  <Fragment>
    <Card style={container}className={classes.root}>
        <CardContent>
            <Typography gutterBottom component="body1">
                <Grid item lg={12}>
                    <InfoBar stationObj={props.trainStation._contactInfo} type='contactInfo' />
                </Grid>
            </Typography>
        </CardContent>
      </Card>

      
    </Fragment>

)
}

export default TrainStation;