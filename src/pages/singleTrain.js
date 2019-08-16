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
      train: " ",
      trainColors : {
        1: "#EE352E",
        2: "#EE352E",
        3: "#EE352E",
        4: "#00933C",
        5: "#00933C",
        6: "#00933C",
        7: "#B933AD",
        "A": "#0039A6",
        "B":"#FF6319",
        "C":"#0039A6",
        "D":"#FF6319",
        "E":"#0039A6",
        "F":"#FF6319",
        "G":"#6CBE45",
        "J":"#996633",
        "L":"#808183",
        "M":"#FF6319",
        "N":"#FCCC0A",
        "Q":"#FCCC0A",
        "R":"#FCCC0A",
        "S":"#808183",
        "W":"#FCCC0A",
        "Z":"#996633"
      }
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

  trainColors = {

  }
  display = () => (
    this.state.stations.map(item => {
      return (
        <Link style={{color : this.state.trainColors[this.state.train]}}to={`/train/${this.state.train}/${item.stationId}`}><div>{item.stationName}</div></Link>
      )
    }
    )
  )

  render() {
    return (
      <div className="container">
        <div className="trainsView">
          <SinglePageTrainsView id={this.props.match.params.train} />
        </div>
        <div className="stationView">
          <div className="stations">
            {this.display()}
          </div>
        </div>
      </div>
    );
  }
}

export default singleTrain;
