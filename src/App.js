import React, { useState} from "react";
import "./App.css";
import Nav from "./containers/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleBrowse from "./containers/ArticlesBrowse/ArticleBrowse";
import ArticleDisplay from './containers/ArticleDisplay/ArticleDisplay';

const App =() => {

    const [choice, setChoice] = useState([]);
  
    const chooseArticle = (input) =>{
      setChoice(input)
      console.log('dingle')
      console.log(input.file)
      console.log(choice.title)
      console.log(choice.file)
    }

    return(
      <div className="App">
        <Router basename='trains'>
        <Nav/>

        <Switch>
          <Route exact path="/">
            <ArticleBrowse choice={chooseArticle} />
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
