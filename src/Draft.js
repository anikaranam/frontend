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
		var dataToSend;
		 // spawn new child process to call the python script
		 const python = spawn('python', ['AllStarAI.py']);
		 // collect data from script
		 python.stdout.on('data', function (data) {
		  console.log('Pipe data from python script ...');
		  dataToSend = data.toString();
		  alert(dataToSend);
		 });
		 // in close event we are sure that stream from child process is closed
		 python.on('close', (code) => {
		 console.log(`child process close all stdio with code ${code}`);
		 // send data to browser
		 //res.send(dataToSend)
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