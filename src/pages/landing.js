import React, { Component } from 'react';
import TrainsView from '../components/trainsView';
import '../styles/landing.css';


class Landing extends Component {
  render() {
    return (
      <div>
          <div className="display">
            <TrainsView/>
          </div>
      </div>
    );
  }
}

export default Landing;
