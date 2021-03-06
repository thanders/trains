import React, {Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InfoBar from '../../components/InfoBar/InfoBar';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core/styles';

const TrainStation = (props) => {

    const theme = useTheme();
    const accentMain = theme.palette.accent.main;

    const useStyles = makeStyles({
        root: {
            padding: '0px',
            margin: '0px',
            backgroundColor: accentMain
        },
        divider: {
            backgroundColor: 'blue',
            margin: '20px'
        },
      });

      const classes = useStyles();

    console.log('TS....', props.trainStation);

return(
  <Fragment>
    <Card className={classes.root}>
        <CardContent>
            <Typography gutterBottom component="body1">
                <Grid item lg={12}>
                    <InfoBar stationObj={props.trainStation._overview} stationName={props.trainStation._name} type='overview' />
                    
                    <div className={classes.divider}>
                        <Divider variant="middle" />
                    </div>
                    <InfoBar stationAmmenities={props.trainStation._ammenities} type='ammenities' />

                    <div className={classes.divider}>
                        <Divider variant="middle" />
                    </div>
                    <InfoBar stationObj={props.trainStation._contactInfo} type='contactInfo' />
                </Grid>
            </Typography>
        </CardContent>
      </Card>

      
    </Fragment>

)
}

export default TrainStation;