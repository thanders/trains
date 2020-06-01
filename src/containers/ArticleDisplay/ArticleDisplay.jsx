import React, {useState, useEffect, Fragment} from 'react';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TrainStation from '../TrainStation/TrainStation';
import Grid from '@material-ui/core/Grid';

const container= {
    margin: '30px 0px 0px 0px'
}

const useStyles = makeStyles({
    root: {
      maxWidth: 700,
    },
  });

const ArticleDisplay = (props) => {

    const [article, setArticle] = useState(null);
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
    <Grid container justify="space-between">
      <Grid item xs={12} md={8} lg={8}>
        <Card style={container} className={classes.root}>
            <CardMedia
              component="img"
              alt="SBB Trains"
              height="250"
              image={props.banner}
              title={props.bannerCopywrite}
            />
            image {props.bannerCopywrite}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {props.title}
                </Typography>
              <Typography variant="body2" color="textSecondary" component="div">
                <ReactMarkdown source={article} />
              </Typography>
            </CardContent>
        </Card>
      </Grid>
      {props.trainStation ?
        <Grid item xs={7} md={4} lg={4}>
          <TrainStation trainStation= {props.trainStation} />
        </Grid>
        : null}
    </Grid>
  </Fragment>
)
}

export default ArticleDisplay;