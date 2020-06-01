import React, { useState} from "react";
import "./App.css";
import Nav from "./containers/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArticleBrowse from "./containers/ArticlesBrowse/ArticleBrowse";
import ArticleDisplay from './containers/ArticleDisplay/ArticleDisplay';
import {createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { purple, blueGrey, brown, orange } from "@material-ui/core/colors";


const App =() => {

    const [choice, setChoice] = useState([]);
  
    const chooseArticle = (input) =>{
      setChoice(input)
    }

    const [darkState, setDarkState] = useState(false);
    const palletType = darkState ? "dark" : "light";
    const mainPrimaryColor = darkState ? brown[900] : blueGrey[500];
    const mainSecondaryColor = darkState ? brown[500] : brown[500];
    const lightPrimaryColor = darkState ? brown[400] : brown[400];
    const lightSecondaryColor = darkState ? brown[500] : brown[500];
    const darkTheme = createMuiTheme({
      palette: {
        type: palletType,
        primary: {
          main: mainPrimaryColor,
          light: lightPrimaryColor,
        },
        secondary: {
          main: mainSecondaryColor,
          light: lightSecondaryColor,
        }
      }
    });
    const handleThemeChange = () => {
      setDarkState(!darkState);
    };

    return(
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <Router basename='trains'>
          <Nav themeChange={() => handleThemeChange()}/>

          <Switch>
            <Route exact path="/">
              <ArticleBrowse choice={chooseArticle} />
            </Route>
            <Route exact path="/tickets">
              <p>Tickets</p>
            </Route>
            <Route exact path="/article/:key" render={(props) => <ArticleDisplay {...choice} />}>
  
            </Route>

          </Switch>

          </Router>
        </ThemeProvider>
      </div>
    );
}

export default App;
