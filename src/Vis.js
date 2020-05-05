import React from 'react';
import './Vis.css';
import {Bar} from 'react-chartjs-2';

/*const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};*/

class Vis extends React.Component {
	constructor(props) {
		super(props);
		this.state = {statVals: [], graph: {}, teams: this.props.location.state.teams};
		this.showGraph = this.showGraph.bind(this);
		//alert(props.location.state);
		//alert(this.props.location.state.name);
	}

	showGraph() {
		//alert(this.props.location.state);
		// alert(this.props.location);
		// console.dir(this.props);
		// document.getElementById("hi").innerHTML = this.props.location;

		//alert(props.location.vals);


	    //alert(this.state.teams.length);
		
	}

	componentDidMount() {
		//alert(this.state.name);
		alert(this.state.teams.length);

		/*let teams = ["Boston Celtics", "Milwaukee Bucks", "Houston Rockets",
		 "Golden State Warriors", "San Antonio Spurs", "Sacramento Kings", "Portland Trail Blazers",
		 "Philadelphia 76ers", "Los Angeles Clippers", "Los Angeles Lakers"];*/

		let teams = this.state.teams;
		let endpoint = "/teamWins";
		var winsArr = [];

		const requestOptions = {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({toCompare: teams})
	    };

		fetch("http://localhost:3001/teamWins", requestOptions)
			.then(response => response.json())
			.then(data1 => {

				const data = {
					  labels: teams,
					  datasets: [
					    {
					      label: 'Comparing based on Wins',
					      backgroundColor: 'orange',
					      borderColor: 'orange',
					      borderWidth: 1,
					      hoverBackgroundColor: 'orange',
					      hoverBorderColor: 'orange',
					      data: data1
					    }
					  ]
					};
				this.setState({graph: data, statVals: data1});
				this.forceUpdate();
			})
			.catch(error => {
	            alert(error);
	        });
	}

	render() {

		let barGraph = <Bar
			          data={this.state.graph}
			          width={100}
			          height={50}
			          options={{
			            maintainAspectRatio: false
			          }}
			        />;

		//console.log(this.props);
		return (
			<div className="main">
				<label id="hi"></label>
				<div className="bar">
				{barGraph}
				</div>
			</div>
		);
	}
}

export default Vis;