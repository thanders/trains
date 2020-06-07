import React, {Fragment, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import AdSense from 'react-adsense';

const Advertisement = (props) => {

  const theme = useTheme();
  const mainSecondaryColor = theme.palette.secondary.main;


  const useStyles = makeStyles({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 10px 10px 10px',
      backgroundColor: mainSecondaryColor,
      height: 120,
      marginTop: 30,
    },
  });
  const css = useStyles();

return(
  <Fragment>
    <div className={css.container}>
      Advertisement placeholder
      {/*
      <AdSense.Google
        client='ca-pub-7292810486004926'
        slot='7806394673'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
        layoutKey='-gw-1+2a-9x+5c'
      />
      */}
    </div>
  </Fragment>
  )
}

export default Advertisement;