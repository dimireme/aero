import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FlightList from '../components/FlightsList';

class FlightsListContainer extends PureComponent {
	static propTypes = {
		flights: PropTypes.array,
		error: PropTypes.string,
		searchRequest: PropTypes.string,
	};

	render() {
		let { flights } = this.props;
		const { error, searchRequest } = this.props;

		if(error) return ( <div>Fail flights loading: {error}</div> );

		if(!flights.length) return ( <div>Loading...</div> );

		if(searchRequest) {
			const re = new RegExp(searchRequest.toString(), 'i');
			flights = flights.filter((flight) => {
				return re.test(flight.boardNumber);
			});
		}

		return (
			<FlightList flights={flights} />
		)
	}
}

function mapStateToProps(state) {
	return {
		flights: state.flights,
		error: state.error,
		searchRequest: state.searchRequest,
	}
}

export default connect(mapStateToProps, null)(FlightsListContainer);
