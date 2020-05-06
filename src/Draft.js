import React from 'react';
import logo from './logo.svg';
import './Stats.css';
import Vis from './Vis';
import './Draft.css';

class Draft extends React.Component {
	constructor() {
		super();
		this.getDraft = this.getDraft.bind(this);
	}

	getDraft() {
		
	}

	componentDidMount() {

		fetch("http://localhost:3001/draft")
				.then(response => response.json())
				.then(data1 => {

					//alert(data1);
					document.getElementById('display').innerHTML = data1.length;
					alert(data1.length);
					
				})
				.catch(error => {
		            //alert(error);
		            document.getElementById('display').innerHTML = "oops";
		        });


	}

	render() {
		return (
			<div className="main">
				<div>
					<label>Eastern Conference : </label>
				</div>
				<button onClick = {this.getDraft}> show draft </button>
				<label id='display'></label>

				<div>
					<label>Western Conference : </label>
				</div>
			</div>
		);
	}
}

export default Draft;