import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeRoute from './routes/Home';
import ReactRoute from "./routes/OfficialReact";

class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={HomeRoute} />
					<Route path="/react" exact component={ReactRoute} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default Router;
