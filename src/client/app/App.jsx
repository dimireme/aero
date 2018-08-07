import React, { PureComponent } from 'react';

import NavContainer from './containers/NavContainer';
import SearchContainer from './containers/SearchContainer';
import FlightsListContainer from './containers/FlightsListContainer';

export default class App extends PureComponent {
	render() {
		return (
			<div>
				<NavContainer/>
				<SearchContainer/>
				<FlightsListContainer/>
			</div>
		);
	}
}
