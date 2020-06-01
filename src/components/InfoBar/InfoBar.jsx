import React, {Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfoElement from './InfoElement/InfoElement';
import List from '@material-ui/core/List';
import OverviewElement from './OverviewElement/OverviewElement';
import IconElement from './IconElement/IconElement';

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
    horizontalList: {
      listStyleType: 'none',
    },
    listElem: {
      display:'inline',
      padding: '20px',
    }

  });

const InfoBar = (props) => {

    const classes = useStyles();
    let elements =[];
    if(props.stationObj !== undefined && props.stationObj !== null){
      elements = Object.entries(props.stationObj)
      console.log('elements', elements);
    }
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
              <OverviewElement key={key} label={element[0]} value={element[1]}/>
            )}
          </List>
        </Fragment>
      )
    }

    if(props.type === 'ammenities'){
      return(
        <Fragment>
          <ul className={classes.horizontalList}>
            {props.stationAmmenities.map((element, key) =>
                <li className={classes.listElem} key={key}>
                  <IconElement key={key} iconName={element}/>
                </li>
            )}
          </ul>
        </Fragment>
      )
    }
    
    if(props.type === 'contactInfo'){
      return(
        <Fragment>
          
          <List component="nav" dense={true}>
            {elements.map((element, key) =>
              <InfoElement  key={key} label={element[0]} value={element[1]} name={names[key]}/>
            )}
          </List>
        </Fragment>
      )
    }

    return 'dingle'
  }
export default InfoBar;