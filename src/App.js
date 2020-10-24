import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
    </Switch>
  </React.Fragment>
  );
}

export default App;