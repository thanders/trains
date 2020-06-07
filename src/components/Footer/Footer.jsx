import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const Footer = (props) => {

  const theme = useTheme();
  const mainSecondaryColor = theme.palette.primary.main;
  const text = theme.palette.primary.contrastText;

  const useStyles = makeStyles({
    container: {
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px 10px 10px 10px',
      backgroundColor: mainSecondaryColor,
      marginTop: 30,
      color: text
    },
  });
  const css = useStyles();

  const getYear = () => {
    return new Date().getFullYear();
  }
  let copywrite = `\u00a9 ${getYear()} Placeholder`;

return(
  <Fragment>
    <Grid container justify="space-between" className={css.container}>
      <footer>
        <Grid item >
        <p>{copywrite}</p>
        </Grid>
      </footer>
    </Grid>
  </Fragment>
  )
}

export default Footer;