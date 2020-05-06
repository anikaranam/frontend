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
		this.state = {
			statVals: [], 
			graph: {},
			teams: this.props.location.state.teams,
			players: this.props.location.state.players,
			teamStat: this.props.location.state.teamStat,
			playerStat: this.props.location.state.playerStat,
			option: this.props.location.state.option
		};

		//this.showGraph = this.showGraph.bind(this);
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

		if (this.state.option == "teamButton") {
			 let teams = this.state.teams;
			 let stat = this.state.teamStat;
			 let endpoint = "";

			 if (stat == "Number of Wins") {
			 	endpoint = "teamWins";
			 } else if (stat == "Number of Losses") {
			 	endpoint = "teamLosses";
			 } else if (stat == "Points Per Game") {
			 	endpoint = "teamPoints";
			 } else if (stat == "Number of home wins") {
			 	endpoint = "teamHomeWins";
			 } else if (stat == "Number of away wins") {
			 	endpoint = "teamAwayWins";
			 }

			 const requestOptions = {
			        method: 'POST',
			        headers: { 'Content-Type': 'application/json' },
			        body: JSON.stringify({toCompare: teams})
			    };

				fetch("http://localhost:3001/" + endpoint, requestOptions)
					.then(response => response.json())
					.then(data1 => {

						const data = {
							  labels: teams,
							  datasets: [
							    {
							      label: 'Comparing based on ' + stat,
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
			} else if (this.state.option == "playerButton") {
				 let players = this.state.players;
				 let stat = this.state.playerStat;
				 let endpoint = "";

				 if (stat == "Points Per Game") {
				 	endpoint = "playerPointsPerGame";
				 } else if (stat == "Assists Per Game") {
				 	endpoint = "playerAssistsPerGame";
				 } else if (stat == "Rebounds Per Game") {
				 	endpoint = "playerReboundsPerGame";
				 } else if (stat == "Blocks Per Game") {
				 	endpoint = "playerBlocksPerGame";
				 } else if (stat == "Steals Per Game") {
				 	endpoint = "playerStealsPerGame";
				 } else if (stat == "Number of games played") {
				 	endpoint = "playerGamesPlayed";
				 }

				 const requestOptions = {
				        method: 'POST',
				        headers: { 'Content-Type': 'application/json' },
				        body: JSON.stringify({toCompare: players})
				    };

					fetch("http://localhost:3001/" + endpoint, requestOptions)
						.then(response => response.json())
						.then(data1 => {

							const data = {
								  labels: players,
								  datasets: [
								    {
								      label: 'Comparing based on ' + stat,
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