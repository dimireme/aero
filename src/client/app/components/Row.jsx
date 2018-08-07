import React from 'react';

const Row = ({ flight }) => {
	return (
		<div>
			{ `from: ${flight.from} to ${flight.to}. Departed at: ${flight.startTime}, arrived at: ${flight.endTime}. Board: ${flight.boardNumber}.` }
		</div>
	);
};

export default Row;
