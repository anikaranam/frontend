import React from 'react';
import logo from './logo.svg';
import './Crudpage.css';

class Crudpage extends React.Component {
	
	handleInsertClick() {

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
	}

	handleReadClick() {
		let pName = document.getElementById('readName').value;
		const requestOptions = {
	        method: 'GET',
	        headers: { 'Content-Type': 'application/json' }
	    };
		fetch('http://localhost:3001/readCoachRecord?coachName=' + pName, requestOptions)
			.then(response => response.json())
			.then(data => {
				let result = "Name : " + data[0].CoachName + ", Career Wins : " + data[0].CareerWins + ", Career Losses : " + data[0].CareerLosses + ", Win Percentage : " + data[0].WInPercentage
				 + ", Manages : " + data[0].Manages;
				alert(result);
			})
			.catch(error => {
	            alert("No such coach exists in the database!");
	        });
	}

	handleUpdateClick() {
		let cName = document.getElementById('updateName').value;
		let cWins = document.getElementById('updateWins').value;

		const requestOptions = {
	        method: 'PUT',
	        headers: { 'Content-Type': 'application/json' },
	        body: JSON.stringify({coachName: cName, newWins:cWins})
	    };
		fetch('http://localhost:3001/updateCoachRecord', requestOptions)
			.then(response => response.json())
			.then(data => {
				alert('Coach ' + cName + "'s wins have been changed to " + cWins);
			})
			.catch(error => {
	            alert("Coach with such a name does not exist!");
	        });
	}

	handleDeleteClick() {
		let cName = document.getElementById('delName').value;
		const requestOptions = {
	        method: 'DELETE',
	    };
		fetch('http://localhost:3001/deleteCoachRecord?coachName='+cName, requestOptions)
			.then(response => response.json())
			.then(data => {
				if (data.affectedRows == 0) {
					alert('Coach ' + cName + "'s record does not exist in the database!");
				} else {
					alert('Coach ' + cName + "'s details have been deleted from the database!");
				}
			})
			.catch(error => {
	            alert("Coach with such a name does not exist in the database!");
	        });
	}

	render() {
		return (
		    <div className="main">
		      <label className="title">NBAVISION</label>
		      <hr className="line" />
		      
		      <div className="insertDiv">
		      	<label className="insertLabel">Insert record in Coach Table</label>
		      	<input type='text' id='insName' placeholder='Name of Coach'></input>
		      	<input type='number' id='insAct' placeholder='Seasons active'></input>
		      	<input type='number' id='insWins' placeholder='Career wins'></input>
		      	<input type='number' id='insLoss' placeholder='Career losses'></input>
		      	<button onClick={this.handleInsertClick}>Submit</button>
		      </div>

		      <hr className="line" />

		      <div className="readDiv">
		      	<label className="insertLabel">View career wins, losses and win percentage for a specific coach</label>
		      	<input type='text' id='readName' placeholder='Name of Coach'></input>
		      	<button onClick={this.handleReadClick}>Submit</button>
		      </div>

		      <hr className="line" />

		      <div className="updateDiv">
		      	<label className="insertLabel">Update the career wins for a given Coach</label>
		      	<input type='text' id='updateName' placeholder='Name of Coach'></input>
		      	<input type='number' id='updateWins' placeholder='New Career wins'></input>
		      	<button onClick={this.handleUpdateClick}>Submit</button>
		      </div>

		      <hr className="line" />

		      <div className="deleteDiv">
		      	<label className="insertLabel">Delete record from Coach Table</label>
		      	<input type='text' id='delName' placeholder='Name of Coach'></input>
		      	<button onClick={this.handleDeleteClick}>Submit</button>
		      </div>
		    </div>
		  );
	}
  
}

export default Crudpage;
