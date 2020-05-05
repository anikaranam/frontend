/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/


import * as serviceWorker from './serviceWorker';

import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from "react-router";
import App from './App';
import Stats from './Stats';
import Draft from './Draft';
import Query from './Query';
import Crudpage from './Crudpage';
import Vis from './Vis';

ReactDOM.render(
    <Router>
    <Route exact path="/" component={App} />
      <Route path="/stats" component={Stats} />
      <Route path="/draft" component={Draft} />
      <Route path="/query" component={Query} />
      <Route path="/visualize" component={Vis} />
      <Route path="/demo" component={Crudpage} />
  </Router>,

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();