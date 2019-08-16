import React, { Component } from 'react';
import SinglePageTrainsView from '../components/singlePageTrainView';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/singleTrain.css';

class singleTrain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: [],
      train: " "
    }
  }

  async componentDidMount() {
    try {
      let { data } = await axios.get(`https://mta-real-time.herokuapp.com/trains/${this.props.match.params.train}`);
      this.setState({
        stations: data,
        train: this.props.match.params.train
      })
    } catch (err) {
      console.log(err)
    }
  }

  display = () => (
    this.state.stations.map(item => {
      return (
        <Link to={`/train/${this.state.train}/${item.stationId}`}>{item.stationName}</Link>
      )}
    )
  )

  render() {
    return (
      <div className="container">
        <div className="trainsView">
          <SinglePageTrainsView id={this.props.match.params.train} />
        </div>
        <div className="stations">
          {this.display()}
        </div>
      </div>
    );
  }
}

export default singleTrain;
