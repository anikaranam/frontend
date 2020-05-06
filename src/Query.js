import React from 'react';
import './Query.css';


class Query extends React.Component {
	constructor() {
		super();
		this.query1 = this.query1.bind(this);
		this.query2 = this.query2.bind(this);
	}

	query1() {
		var player1 = prompt("Enter player name", "Aaron Gordon");
		fetch('http://localhost:3001/playerWins?name=' + player1)
			.then(response => response.json())
			.then(data => {
				document.getElementById("1").innerHTML = data[0].PlayerName + " has " + data[0].number_of_wins + " wins in 2018/19";
			})
			.catch(error => {
	            alert(error);
	        });
	}

	query2() {
		fetch('http://localhost:3001/topPoints')
			.then(response => response.json())
			.then(data => {
				document.getElementById("2").innerHTML = (data[0].topPoints * 100).toString() + "%"; 
			})
			.catch(error => {
	            alert(error);
	        });
	}

	query3() {
		var coach1 = prompt("Name of coach 1", "Brad Stevens");
		var coach2 = prompt("Name of coach 2", "Jim Boylen");

		fetch('http://localhost:3001/compare?name1='+coach1+"&name2="+coach2)
			.then(response => response.json())
			.then(data => {
				document.getElementById("3").innerHTML = data.name + " has the better offense with " + data.points + " points per game on average"; 
			})
			.catch(error => {
	            alert(error);
	        });
	}

	render() {
		return (
			<div className="main">
				<div className="query">
					<label>Find the number of wins for a specific player for the 2018/19 season</label>
					<button onClick={this.query1}>Execute query 1</button>
					<div>
					<label id="1"></label>
					</div>
				</div>
				<div className="query">
					<label>Find the percentage of players who scored more than 20 points and also played for teams in the top 10</label>
					<button onClick={this.query2}>Execute query 2</button>
					<label id = "2"></label>
				</div>
				<div className="query">
					<label>Compare two coaches and find the one with a better offense</label>
					<button onClick={this.query3}>Execute query 3</button>
					<label id = "3"></label>
				</div>
			</div>
		);
	}
}

export default Query;