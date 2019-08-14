import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './pages/landing';

class App extends Component {
  render() {
    const landingPageComponent = () => (<LandingPage/>)
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={landingPageComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
