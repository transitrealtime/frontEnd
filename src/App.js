import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './pages/landing';
import SingleTrain from './pages/singleTrain';

class App extends Component {
  render() {
    const landingPageComponent = () => (<LandingPage/>);
    const singleTrainComponent = (props) => (<SingleTrain {...props}/>);
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={landingPageComponent}/>
          <Route exact path="/train/:train" render={singleTrainComponent}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
