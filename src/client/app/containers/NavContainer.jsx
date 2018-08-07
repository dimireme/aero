import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
				<p onClick={this.onEvent} data-status="departed">Вылет</p>
				<p onClick={this.onEvent} data-status="arrived">Прилет</p>
				<p onClick={this.onEvent} data-status="delayed">Задержанные рейсы</p>
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
