import { createAction } from 'redux-actions';

import flightsList from '../../databases/flightsList';

export const loadFlightsStart   = createAction('LOAD_FLIGHTS_START');
export const loadFlightsSuccess = createAction('LOAD_FLIGHTS_SUCCESS');
export const loadFlightsFailure = createAction('LOAD_FLIGHTS_FAILURE');

export const loadFlights = (dispatch) => (status) => {

// Can't find free api, so decided to use local file
/*
	dispatch(loadFlightsStart(status));
	fetch(`http://flights.api/path/to/the/endpoint/${status}`)
		.then(res => res.json())
		.then(query => {
			const flights = query.result;
			dispatch(loadFlightsSuccess(flights));
		})
		.catch(err => dispatch(loadFlightsFailure(`Failed to load flights: ${err}`)));
*/

	dispatch(loadFlightsStart(status));
	setTimeout(function() {
		const flights = flightsList.filter((flight) => {
			return flight.status === status;
		});
		dispatch(loadFlightsSuccess(flights));
	}, 2000);


};
