import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
// import Navbar from './components/Navbar'

function App() {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </React.Fragment>
  );
}

export default App;