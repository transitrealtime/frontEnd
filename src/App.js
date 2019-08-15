import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landing';
import SingleTrain from './pages/singleTrain';
import SingleTrainStation from './pages/singleTrainStation';

class App extends Component {
  render() {
    const landingPageComponent = () => (<LandingPage />);
    const singleTrainStationComponent = (props) => (< SingleTrainStation  {...props}/>)
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={landingPageComponent} />
          <Route exact path="/train/:train" 
          render={props =>
            {const {match: {params: { train }}} = props; 
            return (<SingleTrain key={`train=${train}`}{...props}/>);
            }}
          />
          <Route exact path="/train/:train/:station" render={singleTrainStationComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
