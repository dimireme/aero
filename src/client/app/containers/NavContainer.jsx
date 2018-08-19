import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadFlights } from '../actions/flight';
import Nav from '../components/Nav';

class NavContainer extends PureComponent {
	static propTypes = {
		loadFlights: PropTypes.func,
	};

	constructor(props) {
		super(props);

		this.state = {
			menuItems: [
				{text: 'Вылет',             status:'departed'},
				{text: 'Прилет',            status:'arrived'},
				{text: 'Задержанные рейсы', status:'delayed'},
			],
			status: 'departed'
		}

	}

	componentDidMount() {
		const { status } = this.state;
		const { loadFlights } = this.props;
		if (typeof loadFlights === 'function') {
			loadFlights(status);
		}
	}

	onClickEvent = (event) => {
		event.preventDefault();

		// update status in local state
		const newStatus = event.currentTarget.dataset.status;
		this.setState({
			status: newStatus
		});

		// load new list of flights
		const { loadFlights } = this.props;
		if (typeof loadFlights === 'function') {
			loadFlights(newStatus);
		}
	};


	render() {
		const { menuItems, status } = this.state;
		return (
			<Nav
				menuItems={menuItems}
				status={status}
				onClickEvent={this.onClickEvent}
			/>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadFlights: (status) => loadFlights(dispatch)(status),
	}
}

export default connect(null, mapDispatchToProps)(NavContainer);
