import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link,} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    article: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
  }));

const ArticleBrowse = (props) => {

    const [articles, setArticle] = useState(null);
    const classes = useStyles();
    useEffect(() => {
        setArticle(props.articles)
        console.log({articles})
      });

      const handleClick = (choice) => {
        props.choice(choice)
      }

    if (articles != null)
        return(
    <Grid container spacing={3} className={classes.article} style={{cursor: 'pointer'}}>
        {articles.map((article, index) => (
            <Grid item xs={6} sm={3} key={index}>
                <Link to={`/article/${index}`}>
                <Card className={classes.root} onClick={() => handleClick(article)}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                    <div value={article}>
                        {article.title}
                        {article.blurb}
                    </div>
                    </Typography>

                    <CardMedia
                        component="img"
                        alt="SBB Trains"
                        height="100"
                        image={article.banner}
                        title={article.bannerCopywrite}
                    />
                </Card>
                </Link>
            </Grid>
            
        ))}
    </Grid>
     )
     else{
         return(
            <div>
            <p>my </p>
        </div>
         )
     }
}

export default ArticleBrowse;