import React, {useState, useEffect, Fragment} from 'react';
import ReactMarkdown from 'react-markdown';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TrainStation from '../TrainStation/TrainStation';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Advertisement from '../../components/Advertisement/Advertisement';
import Footer from '../../components/Footer/Footer';

const ArticleDisplay = (props) => {

  const theme = useTheme();
  const accentMain = theme.palette.accent.main;

  const [article, setArticle] = useState(null);

  const useStyles = makeStyles({

    container: {
      marginTop: 50,
    },
    root: {
      maxWidth: 700,
      backgroundColor: accentMain,
      marginBottom: 20
    },
  });

  const classes = useStyles();

  useEffect(() => {
      console.log('fetching url', props.file);
      fetch(props.file)
      .then(res => res.text())
      .then(text => {
          setArticle( text)})
      .catch((err) => console.error(err));
  });

return(
  <Fragment>
    <Grid container justify="space-between" className={classes.container}>
      <Grid item xs={12} sm={12} md={8}>
        <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography paragraph variant="body1" color="textSecondary" component="div">
          {props.blurb}
          </Typography>
        </CardContent>
            {/*
            <CardMedia
              component="img"
              alt="SBB Trains"
              height="250"
              image={props.banner}
              title={props.bannerCopywrite}
            />
            image {props.bannerCopywrite}
            */}

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="div">
            <ReactMarkdown source={article} />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
    {props.trainStation ?
    <Grid item xs={12} sm={12} md={4}>
          <TrainStation trainStation= {props.trainStation} />
    </Grid>
        : null}
  </Grid>

  <Grid item xs={12} sm={12} md={12} lg={12}>
          <Advertisement />
    </Grid>

    <Footer />
    
  </Fragment>
)
}

export default ArticleDisplay;