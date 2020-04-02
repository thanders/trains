import React, { useState} from "react";
import "./App.css";
import Nav from "./components/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleBrowse from "./components/ArticlesBrowse/ArticleBrowse";
import getArticles from './articleList/articleList';
import ArticleDisplay from './components/ArticleDisplay/ArticleDisplay';

const App =() => {

    const articles = getArticles();

    const [choice, setChoice] = useState(articles[0]);
  
    const chooseArticle = (input) =>{
      setChoice(input)
      console.log('dingle')
      console.log(input.file)
      console.log(choice.title)
      console.log(choice.file)
    }

    return(
      <div className="App">
        <Router>
        <Nav/>

        <Switch>
          <Route exact path="/">
            <ArticleBrowse articles={articles} choice={chooseArticle} />
          </Route>
          <Route exact path="/tickets">
            <p>Tickets</p>
          </Route>
          <Route exact path="/article/:key" render={(props) => <ArticleDisplay {...choice} isAuthed={true} />}>
 
          </Route>

        </Switch>

        </Router>
      </div>
    );
}

export default App;
