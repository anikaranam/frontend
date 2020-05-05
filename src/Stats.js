import React from 'react';
import logo from './logo.svg';
import './Stats.css';
import Vis from './Vis';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class Stats extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {teams: [], players: [], currentTeams: [], currentPlayers: [], chosenTeamStat: "", chosenPlayerStat: ""};
		this.teamAdd = this.teamAdd.bind(this);
		this.playerAdd = this.playerAdd.bind(this);
		this.teamStatAdd = this.teamStatAdd.bind(this);
		this.playerStatAdd = this.playerStatAdd.bind(this);
		this.callVis = this.callVis.bind(this);

		//alert(props.location.state.name);
	}

	componentDidMount() {

		var teamsArr = [];
		fetch('http://localhost:3001/teams')
			.then(response => response.json())
			.then(data => {
				var teamsArr = [];
				for (let i = 0; i < data.length; i++) {
					teamsArr.push(data[i].TeamName);
				}
				this.setState({teams: teamsArr});
			})
			.catch(error => {
	            alert(error);
	        });


		
		fetch('http://localhost:3001/players')
			.then(response => response.json())
			.then(data => {
				var playersArr = [];
				for (let i = 0; i < data.length; i++) {
					playersArr.push(data[i].PlayerName);
				}
				this.setState({players: playersArr});
			})
			.catch(error => {
	            alert(error);
	        });


	}

	teamAdd(evt) {
		let addedTeams = this.state.currentTeams;
		if (addedTeams.length == 10) {
			alert("10 teams have already been added");
		}
		if (addedTeams.length < 10 && !addedTeams.includes(evt.target.value)) {
			addedTeams.push(evt.target.value);
		}
		this.setState({currentTeams: addedTeams});
		this.forceUpdate();
	}

	playerAdd(evt) {
		let addedPlayers = this.state.currentPlayers;
		if (addedPlayers.length == 10) {
			alert("10 players have already been added");
		}
		if (addedPlayers.length < 10 && !addedPlayers.includes(evt.target.value)) {
			addedPlayers.push(evt.target.value);
		}
		this.setState({currentPlayers: addedPlayers});
		this.forceUpdate();
	}

	teamStatAdd(evt) {
		this.setState({chosenTeamStat: evt.target.value});
		this.forceUpdate();
	}

	playerStatAdd(evt) {
		this.setState({chosenPlayerStat: evt.target.value});
		this.forceUpdate();
	}

	callVis(evt) {
		alert(evt.target.id);
		this.props.history.push({
			pathname: "/visualize",
			state: {
				teams: this.state.currentTeams,
				teamStat: this.state.chosenTeamStat,
				players: this.state.currentPlayers,
				playerStat: this.state.chosenPlayerStat,
				option: evt.target.id
			}
		})
	}

	render() {

		let teamsArr = this.state.teams;
        let teamsOptions = teamsArr.map((team) =>
                <option key={team}>{team}</option>
 		);

        let playersArr = this.state.players;
        let playersOptions = playersArr.map((player) =>
                <option key={player}>{player}</option>
            );

        let teamStats = ["Number of Wins", "Number of Losses", "Points Per Game", 
        "Assists Per Game", "Rebounds Per Game", "Number of home wins", "Number of away wins", "Number of players from a state",
         "Number of players from a college"];

        let playerStats = ["Points Per Game", "Assists Per Game", "Rebounds Per Game", 
        "Blocks per game", "Steals per game", "Number of games played", "Home state", "College", "Percentage of team’s points"];

        let teamsStatsOptions = teamStats.map((team) =>
                <option key={team}>{team}</option>
 		);

 		let playersStatsOptions = playerStats.map((player) =>
                <option key={player}>{player}</option>
        );

        let chosenTeamsList = this.state.currentTeams.map((team) => 
        	<label>{team}, </label>
        );

        let chosenPlayersList = this.state.currentPlayers.map((player) => 
        	<label>{player}, </label>
        );

        let teamStatChosen = <label>{this.state.chosenTeamStat}</label>;
        let playerStatChosen = <label>{this.state.chosenPlayerStat}</label>;

		return (
			    <div className="main">
			      <div className="description">
			      	<div className="team">
			      		<div className="sectionHeader">
			      			<label>Team</label>
			      		</div>
			      		<label className="sectionTitles">Add upto 10 teams to compare</label>
			      		<select id="teams" onChange={this.teamAdd}>
			      			{teamsOptions}
			      		</select>

			      		<div>
				      		<label className="sectionTitles">Pick a stat to compare</label>
				      		<select id="teams" onChange={this.teamStatAdd}>
				      			{teamsStatsOptions}
				      		</select>
			      		</div>

			      		<div id = "chosenTeam">
			      			<label>Teams chosen - </label>
			      		</div>

			      		<div className="teamsList">
			      			{chosenTeamsList}
			      		</div>

			      		<div id = "chosenTeamStat">
			      			<label>Stat chosen - </label>
			      		</div>

			      		<div className="teamStatList">
			      			<label>{teamStatChosen}</label>
			      		</div>

			      		<div>
			      			<button id ="teamButton" className="visualize" onClick={this.callVis}>Visualize!</button>
			      		</div>

			      	</div>
			      	<div className="player">
			      		<div id="hi" className="sectionHeader">
			      			<label>Player</label>
			      		</div>
			      		<label className="sectionTitles">Add upto 10 players to compare</label>
			      		<select id="players" onChange={this.playerAdd}>
			      			{playersOptions}
			      		</select>

			      		<div>
				      		<label className="sectionTitles">Pick a stat to compare</label>
				      		<select id="players" onChange={this.playerStatAdd}>
				      			{playersStatsOptions}
				      		</select>
			      		</div>

			      		<div id = "chosenPlayer">
			      			<label>Players chosen - </label>
			      		</div>

			      		<div className="playersList">
			      			{chosenPlayersList}
			      		</div>

			      		<div id = "chosenPlayerStat">
			      			<label>Stat chosen - </label>
			      		</div>

			      		<div className="playerStatList">
			      			<label>{playerStatChosen}</label>
			      		</div>

			      		<div>
			      			<Link to = {{
			      				pathname: "/visualize",
			      				state: {
			      					name: "Ani"
			      				}
			      			}}><button id ="playerButton" onClick = {this.callVis} className="visualize">Visualize!</button></Link>
			      		</div>

			      	</div>
			      </div>
			    </div>
		  );
	}
  
}

export default Stats;
