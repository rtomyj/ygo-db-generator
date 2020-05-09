import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

import { CreateScript } from './CreateScript'

ReactDOM.render(
	<Router>
		<>
			<Switch>
				<Route exact path='/' component={ CreateScript } >
				</Route>
				<Route exact path='/info'>
					<p>Hello!!</p>
				</Route>
			</Switch>
		</>
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
