import React from 'react';
import PropTypes from 'prop-types';

import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import styles from './flightList.css';

const FlightsList = ({ flights }) => (
	<Paper className={styles.container}>
		<Table>
			<TableHead>
				<TableRow>
					<TableCell>From</TableCell>
					<TableCell>Departed at</TableCell>
					<TableCell>To</TableCell>
					<TableCell>Arrived at</TableCell>
					<TableCell>Board Number</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{flights.map(flight => (
					<TableRow key={flight.id}>
						<TableCell component="th" scope="row">{flight.from}</TableCell>
						<TableCell>{flight.startTime}</TableCell>
						<TableCell>{flight.to}</TableCell>
						<TableCell>{flight.endTime}</TableCell>
						<TableCell>{flight.boardNumber}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	</Paper>
);

FlightsList.propTypes = {
	flights: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			boardNumber: PropTypes.string,
			from: PropTypes.string,
			to: PropTypes.string,
			startTime: PropTypes.string,
			endTime: PropTypes.string,
			status: PropTypes.string,
		})
	),
};

export default FlightsList;