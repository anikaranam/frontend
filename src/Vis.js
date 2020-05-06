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
		//alert(this.state.name);
		//alert(this.state.teams.length);

		/*let teams = ["Boston Celtics", "Milwaukee Bucks", "Houston Rockets",
		 "Golden State Warriors", "San Antonio Spurs", "Sacramento Kings", "Portland Trail Blazers",
		 "Philadelphia 76ers", "Los Angeles Clippers", "Los Angeles Lakers"];*/

		 /*if (option == "teamButton") {

		 	let teams = this.state.teams;
			let stat = this.state.teamStat;
			let endpoint = "";

			 let teamStats = ["Number of Wins", "Number of Losses", "Points Per Game", 
        "Assists Per Game", "Rebounds Per Game", "Number of home wins", "Number of away wins", "Number of players from a state",
         "Number of players from a college"];

			if (stat == "Number of Wins") {

			} else if (stat == "Number of Losses") {

			} else if (stat == "Points Per Game") {
				
			} else if (stat == "Assists Per Game") {
				
			} else if (stat == "Rebounds Per Game") {
				
			} else if (stat == "Number of home wins") {
				
			} else if (stat == "Number of away wins") {
				
			} else if (stat == "Number of players from a state") {
				
			} else if (stat == "Number of players from a college") {
				
			} 


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



		 } else if (option == "playerButton") {


		 	let teams = this.state.teams;
			let stat = this.state.teamStat;
			let endpoint = "";

			 let teamStats = ["Number of Wins", "Number of Losses", "Points Per Game", 
        "Assists Per Game", "Rebounds Per Game", "Number of home wins", "Number of away wins", "Number of players from a state",
         "Number of players from a college"];

			if (stat == "Number of Wins") {

			} else if (stat == "Number of Losses") {

			} else if (stat == "Points Per Game") {
				
			} else if (stat == "Assists Per Game") {
				
			} else if (stat == "Rebounds Per Game") {
				
			} else if (stat == "Number of home wins") {
				
			} else if (stat == "Number of away wins") {
				
			} else if (stat == "Number of players from a state") {
				
			} else if (stat == "Number of players from a college") {
				
			} 


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



		 }*/

		
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