import React from 'react';
import { Switch, Route } from 'react-router-dom'
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <React.Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </React.Fragment>
  );
}

export default App;