import React from 'react';
import logo from './logo.svg';
import './Stats.css';
import Vis from './Vis';
import './Draft.css';

class Draft extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {

		fetch("http://localhost:3001/draft")
				.then(response => response.json())
				.then(data1 => {

					//alert(data1);
					document.getElementById('display').innerHTML = data1.length;
					alert(data1.length);

					for (let i = 0; i < 10; i++) {
						let player = data1[0];
						document.getElementById(i.toString()).innerHTML = "Best " + player.pos 
						+ " is " + player.name + " with a Player Efficiency of " + player.pe;
					}
					
				})
				.catch(error => {
		            alert(error);
		        });


	}

	render() {
		return (
			<div className="main">
				<div className="draftDiv">
					<label>Eastern Conference : </label>
					<div><label id = "1"></label></div>
					<div><label id = "2"></label></div>
					<div><label id = "3"></label></div>
					<div><label id = "4"></label></div>
					<div><label id = "5"></label></div>
				</div>
				<div className="draftDiv">
					<label>Western Conference : </label>
					<div><label id = "6"></label></div>
					<div><label id = "7"></label></div>
					<div><label id = "8"></label></div>
					<div><label id = "9"></label></div>
					<div><label id = "10"></label></div>
				</div>
				<label id='display'></label>
			</div>
		);
	}
}

export default Draft;