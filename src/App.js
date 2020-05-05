import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Stats from './Stats';
import Draft from './Draft';
import Query from './Query';
import Crudpage from './Crudpage';
import Vis from './Vis';

class App extends React.Component {
	constructor() {
		super();
		this.sendProps = this.sendProps.bind(this);
	}
	
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

	sendProps() {
		this.props.history.push({
			pathname: "/stats",
			state: {
				name: "ani"
			}
		})
	}

	render() {
		return (
			    <div className="main">
			     <Router>
			      <label className="title">NBAVISION</label>
			      <div className="description">
			      	<label>Data visualization tool for the 2018/19 NBA Season</label>
			      	<div className="buttons">
				      <Link to="/stats"><button onClick={this.sendProps}>Compare stats for players or teams</button></Link>
				      <Link to="/draft"><button>All Star Draft</button></Link>
				      <Link to="/demo"><button>Demo of CRUD operations</button></Link>
				      <Link to="/query"><button>Some interesting queries</button></Link>
				   </div>
			      </div>
				    <Switch>
				    	<Route exact path="/visualize">
					        <Vis />
					    </Route>
					    <Route path="/stats">
					        <Stats />
				        </Route>
			 	        <Route path="/draft">
					        <Draft />
					    </Route>
				        <Route path="/demo">
				            <Crudpage />
				        </Route>
				        <Route path="/query">
				            <Query />
				    	</Route>
				    </Switch>
		    	</Router>     
			    </div>
		  );
	}
  
}

export default App;



