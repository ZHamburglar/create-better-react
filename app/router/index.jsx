import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';


import Main from 'Main';
import Challenge from 'Challenge';



export default (
  <Router history={hashHistory}>
    <Route path="/">
			<Route path="Challenge" component={Challenge}/>
			<Route path="Main" component={Main}/>
			<IndexRoute component={Main}/>
    </Route>
  </Router>
);
