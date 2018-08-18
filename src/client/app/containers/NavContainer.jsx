import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';

import { loadFlights } from '../actions/flight';

class NavContainer extends PureComponent {
	static propTypes = {
		load: PropTypes.func,
	};

	componentDidMount() {
		this.props.load('departed');
	}

	onEvent = (event) => {
		const { load } = this.props;

		if (typeof load === 'function') {
			load(event.currentTarget.dataset.status);
		}

		event.preventDefault();
	};

	render() {
		return (
			<div>
				<Button color="primary" onClick={this.onEvent} data-status="departed">Вылет</Button>
				<Button	color="primary" onClick={this.onEvent} data-status="arrived">Прилет</Button>
				<Button color="primary"	onClick={this.onEvent} data-status="delayed">Задержанные рейсы</Button>
			</div>
		)
	}
}


function mapDispatchToProps(dispatch) {
	return {
		load: (status) => loadFlights(dispatch)(status),
	}
}

export default connect(null, mapDispatchToProps)(NavContainer);
