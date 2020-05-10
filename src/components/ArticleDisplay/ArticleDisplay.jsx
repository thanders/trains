import React, {useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

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
    console.log('Testing...', props.banner.value);

    useEffect(() => {
        console.log('fetching url', props.file);
        fetch(props.file)
        .then(res => res.text())
        .then(text => {
            setArticle( text)})
        .catch((err) => console.error(err));
    });

return(
    <Card style={container}className={classes.root}>
        <CardMedia
          component="img"
          alt="SBB Trains"
          height="250"
          src={props.banner}
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
)
}

export default ArticleDisplay;