import React, { Component } from 'react';
import TrainsView from '../components/trainsView';
import MtaStatusView from '../components/mtaStatusView';
import TwitterFeed from '../components/twitterFeed';
import '../styles/landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1>Transit Real Time</h1>
        <div className="container">
          <div className="trainViewContainer">
            <div className="trainView">
              <TrainsView/>
            </div>
          </div>
          <div className="iframeView">
            <MtaStatusView/>
            <TwitterFeed/>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Landing;
