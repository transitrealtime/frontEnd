import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/landing';
import SingleTrain from './pages/singleTrain';
import SingleTrainStation from './pages/singleTrainStation';
import Register from './pages/register';
import setAuthToken from './utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { setCurrentUser, logoutUser} from './store/utilities/auth'


// if(localStorage.jwtToken) {
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   const decoded = jwt_decode(token);
//   setCurrentUser(decoded);
//   const currentTime = Date.now() / 1000;
//   if(decoded.exp < currentTime) {
//     logoutUser();
//   }
// }

class App extends Component {
  render() {
    const landingPageComponent = () => (<LandingPage />);
    const singleTrainStationComponent = (props) => (< SingleTrainStation  {...props}/>)
    const registerComponent = () => (<Register/>);
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={landingPageComponent} />
          <Route exact path="/register" component={registerComponent} />
          {/* <Route exact path="/login" component={Login} /> */}
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
