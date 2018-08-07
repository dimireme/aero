import React from 'react';

import Row from '../components/Row';

const FlightsList = ({ flights }) => {
	return (
		<div>
			<h2>List:</h2>
			{ flights.map((flight, i) => <Row flight={flight} key={i} />) }
		</div>
	);
};

export default FlightsList;