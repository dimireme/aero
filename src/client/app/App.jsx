import React, { PureComponent } from 'react';

import style from'./app.css';

import NavContainer from './containers/NavContainer';
import SearchContainer from './containers/SearchContainer';
import FlightsListContainer from './containers/FlightsListContainer';

export default class App extends PureComponent {
	render() {
		return (
			<div className={style.container}>
				<NavContainer/>
				<SearchContainer/>
				<FlightsListContainer/>
			</div>
		);
	}
}
