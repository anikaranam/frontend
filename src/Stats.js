import React from 'react';
import logo from './logo.svg';
import './Stats.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class Stats extends React.Component {
	
	/*handleInsertClick() {

		let cName = document.getElementById('insName').value;
		let cSeasons = document.getElementById('insAct').value;
		let cWins = document.getElementById('insWins').value;
		let cLoss = document.getElementById('insLoss').value;
		let wPercent = (parseInt(cWins)) / (parseInt(cLoss) + parseInt(cWins));
		const requestOptions = {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({CoachName: cName, SeasonsActive: cSeasons, CareerWins: cWins, CareerLosses: cLoss,
	        	WInPercentage: wPercent})
	    };
		fetch('http://localhost:3001/addCoachRecord', requestOptions)
			.then(response => response.json())
			.then(data => {
				alert('Coach ' + cName + "'s details have been inserted into the database!");
			})
			.catch(error => {
	            alert('Coach already exists in the database!');
	        });
	}*/
	constructor() {
		super();
		var teams = ["Atlanta Hawks", "Boston Celtics", "Brooklyn Nets", "Charlotte Hornets", "LAC"];
		//var t = document.getElementById("hi").innerHTML;
		//t.options = teams;

	}

	/*componentDidMount() {
		const requestOptions = {
	        method: 'POST',
	        headers: { 'Content-Type': 'application/json' }
	    };


		var teams = [];
		fetch('http://localhost:3001/teams', requestOptions)
			.then(response => response.json())
			.then(data => {
				teams = data;
			})
			.catch(error => {
	            alert('Error!');
	        });

		var selectTeam = document.getElementById("teams"); 

		for(var i = 0; i < teams.length; i++) {
		    var opt = teams[i];

		    var el = document.createElement("option");
		    el.text = opt;
		    el.value = opt;

		    selectTeam.add(el);
		}



		var players = [];
		fetch('http://localhost:3001/players', requestOptions)
			.then(response => response.json())
			.then(data => {
				players = data;
			})
			.catch(error => {
	            alert('Error!');
	        });

		var selectPlayer = document.getElementById("players"); 

		for(var i = 0; i < teams.length; i++) {
		    var opt = teams[i];

		    var el = document.createElement("option");
		    el.text = opt;
		    el.value = opt;

		    selectPlayer.add(el);
		}
	}*/

	_onSelect() {
		
	}

	render() {
		return (
			    <div className="main">
			      <div className="description">
			      	<div className="team">
			      		<div className="sectionHeader">
			      			<label>Team</label>
			      		</div>
			      		<label className="sectionTitles">Add upto 10 teams to compare</label>
			      		<select id="teams">
			      		</select>
			      	</div>
			      	<div className="player">
			      		<div id="hi" className="sectionHeader">
			      			<label>Player</label>
			      		</div>
			      		<label className="sectionTitles">Add upto 10 players to compare</label>
			      		<select id="players">
			      		</select>
			      	</div>
			      </div>
			    </div>
		  );
	}
  
}

export default Stats;
