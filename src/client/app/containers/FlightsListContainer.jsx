import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from 'react-loader';

import FlightList from '../components/FlightsList';
import Error from '../components/Error';

class FlightsListContainer extends PureComponent {
	static propTypes = {
		flights: PropTypes.array,
		error: PropTypes.string,
		searchRequest: PropTypes.string,
		isLoaded: PropTypes.bool,
	};

	render() {
		let { flights } = this.props;
		const { error, searchRequest, isLoaded } = this.props;

		if(searchRequest) {
			const re = new RegExp(searchRequest.toString(), 'i');
			flights = flights.filter((flight) => {
				return re.test(flight.boardNumber);
			});
		}

		return (
			<Loader loaded={isLoaded}>
				{error ? <Error message={error}/> : <FlightList flights={flights} />}
			</Loader>
		)
	}
}

function mapStateToProps(state) {
	return {
		flights: state.flights,
		error: state.error,
		searchRequest: state.searchRequest,
		isLoaded: state.isLoaded,
	}
}

export default connect(mapStateToProps, null)(FlightsListContainer);
