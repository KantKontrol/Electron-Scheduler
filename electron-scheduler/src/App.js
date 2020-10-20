import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import MainPage from "./components/MainPage";




function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          

        </Switch>
      </Router>
  );
}

export default App;
