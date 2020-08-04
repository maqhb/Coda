import React from 'react';
import './App.css';
import Routes from './routing/Routes';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Routes}/>
      </Switch>
    </Router>
  );
}

export default App;
