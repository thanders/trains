import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';
import WifiIcon from '@material-ui/icons/Wifi';
import WcIcon from '@material-ui/icons/Wc';
import LocalParkingIcon from '@material-ui/icons/LocalParking';

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
    horizontalList: {
      display: 'inline-block',
      backgroundColor: 'orange'
    },
    names: {
      paddingTop: '7px',
      width: '100px',
    },
  });

const IconElement = (props) => {
    const classes = useStyles();
    const color = 'primary'
    if(props.iconName === 'wifi'){
      return(
        <Fragment>
          <WifiIcon color={color}/>
        </Fragment>);
    }
    if(props.iconName === 'bathrooms'){
      return(
        <Fragment>
          <WcIcon color={color}/>
        </Fragment>);
    }
    if(props.iconName === 'groceryStore'){
      return(
        <Fragment>
          <LocalGroceryStoreOutlinedIcon color={color}/>
        </Fragment>);
    }
    if(props.iconName === 'parking'){
      return(
        <Fragment>
          <LocalParkingIcon color={color}/>
        </Fragment>);
    }
    return(
      <Fragment>
        Icon not found
      </Fragment>
    )
}

export default IconElement;