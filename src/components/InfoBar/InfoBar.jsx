import React, {Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfoElement from './InfoElement/InfoElement';
import List from '@material-ui/core/List';
import OverviewElement from './OverviewElement/OverviewElement';

const container= {
    margin: '30px 0px 0px 0px'
}

const useStyles = makeStyles({
    root: {
      maxWidth: 700,
    },
    componentLabel: {
      fontWeight: 'bold',
    },
  });

const InfoBar = (props) => {

    const classes = useStyles();
    const elements = Object.entries(props.stationObj)
    console.log('what is this', elements);
    let title = '';
    let names =[];
    if(props.type === 'contactInfo'){
      title= 'Contact Information'
      names=['Owner', 'Website']
    }

    if(props.type === 'overview'){
      return(
        <Fragment>
          <div className={classes.componentLabel}>
            {props.stationName}
          </div>
          <List component="nav" dense={true}>
            {elements.map((element, key) =>
              <OverviewElement label={element[0]} value={element[1]}/>
            )}
          </List>
        </Fragment>
      )
    }
    
    if(props.type === 'contactInfo'){
      return(
        <Fragment>
          <div className={classes.componentLabel}>
            {title}
          </div>
          
          <List component="nav" dense={true}>
            {elements.map((element, key) =>
              <InfoElement label={element[0]} value={element[1]} name={names[key]}/>
            )}
          </List>
        </Fragment>
      )
    }
  }
export default InfoBar;