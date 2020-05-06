import React from 'react';
import logo from './logo.svg';
import './Stats.css';
import Vis from './Vis';

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
					
				})
				.catch(error => {
		            //alert(error);
		            document.getElementById('display').innerHTML = "oops";
		        });


	}

	render() {
		return (
			<div className="main">
				<button onClick = {this.getDraft}> show draft </button>
				<label id='display'></label>
			</div>
		);
	}
}

export default Draft;