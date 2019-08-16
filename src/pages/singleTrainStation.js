import React, { Component } from 'react';
import SinglePageTrainsView from '../components/singlePageTrainView';
import axios from 'axios';
import '../styles/singleTrainStation.css'

class singleTrainStation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			northBound:[],
			southBound:[],
			station:"",
		}
	}

	async componentDidMount() {
		try {
			let { data } = await axios.get(`https://mta-real-time.herokuapp.com/trains/${this.props.match.params.train}/${this.props.match.params.station}`);
			this.setState({
				northBound: data.northBound,
				southBound: data.southBound
			})
			console.log(data);
		} catch (err) {
			console.log(err)
		}
		try{
			let {data} = await axios.get(`https://mta-real-time.herokuapp.com/stations/${this.props.match.params.station}`);
			this.setState({
				station: data['Stop Name']
			})
			console.log(data)
		}catch(err){
			console.log(err)
		}
	}

	northBoundTime = () =>{
		let display = this.state.northBound.map(train => {
			return(
				<li>{train.minutesArrival}</li>
			)
		})
		return(
			<ul>{display}</ul>
		)
	}
	southBoundTime = () =>{
		let display = this.state.southBound.map(train => {
			return(
				<li>{train.minutesArrival}</li>
			)
		})
		return(
			<ul>{display}</ul>
		)
	}
	render() {
		return (
			<div class="container">
				<div className="trainsView">
					<SinglePageTrainsView id={this.props.match.params.train} />
				</div>
				<div className="trainTime">
					<h1>{this.state.station}{" " + this.props.match.params.train + " Train"}</h1>
					<div className="northBound">
						Uptown:
						{this.northBoundTime()}
					</div>
					<div className="southBound">
						Downtown:
						{this.southBoundTime()}
					</div>
				</div>
			</div>
		);
	}
}

export default singleTrainStation;
