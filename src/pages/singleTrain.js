import React, { Component } from 'react';
import SinglePageTrainsView from '../components/singlePageTrainView';
import '../styles/singleTrain.css';

class Landing extends Component {

  render() {
    return (
      <div className="trainsView">
        <SinglePageTrainsView/>
      </div>
    );
  }
}

export default Landing;
