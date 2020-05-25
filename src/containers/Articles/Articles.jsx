import React from 'react';
import ArticleDisplay from '../ArticleDisplay/ArticleDisplay';

const ArticlesMain = (props) => {
    console.log('router...')
    console.log(props.match.params.index)
    return (
        <React.Fragment>
            <p>Articles!</p>
            <ArticleDisplay
                article={props.file}
                title={props.title} 
                banner={props.banner} 
                bannerCopywrite={props.bannerCopywrite}
                />

        </React.Fragment>
        )
}

export default ArticlesMain;