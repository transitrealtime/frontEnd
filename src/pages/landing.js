import React, { Component } from 'react';
import TrainsView from '../components/trainsView';
import MtaStatusView from '../components/mtaStatusView';
import '../styles/landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Transit Real Time</h1>
        <div className="container">
          <div className="trainViewContainer">
            <div className="trainView">
              <TrainsView/>
            </div>
          </div>
          <div className="iframeView">
            <MtaStatusView/>
            <MtaStatusView/>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
