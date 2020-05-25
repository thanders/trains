import React, {Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfoElement from './InfoElement/InfoElement';
import List from '@material-ui/core/List';

const container= {
    margin: '30px 0px 0px 0px'
}

const useStyles = makeStyles({
    root: {
      maxWidth: 700,
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
    
    return(
      <Fragment>
        {title}
        <List component="nav" dense={true}>
          {elements.map((element, key) =>
            <InfoElement label={element[0]} value={element[1]} name={names[key]}/>
          )}
        </List>
      </Fragment>
    )
}

export default InfoBar;