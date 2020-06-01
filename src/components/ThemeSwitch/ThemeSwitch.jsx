import React, {Fragment, useState, useEffect} from 'react';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

const ThemeSwitch = (props) => {

  const [darkState, setDarkState] = useState(false);

  const handleSwitchChange = () => {
    setDarkState(!darkState);
    props.themeChange();
  }

  const theme = useTheme();
  const primary = theme.palette.primary.light;


  const useStyles = makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'left',
      padding: '0px 5px 0px 5px',
      backgroundColor: primary,
    },
  });
  const classes = useStyles();

return(
  <Fragment>
    <div className= {classes.container}>
      <div>Light</div>
        <Switch checked={darkState} onChange={()=> handleSwitchChange()} />
      <div>Dark</div>
    </div>
  </Fragment>
  )
}

export default ThemeSwitch;