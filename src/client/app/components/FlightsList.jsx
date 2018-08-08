import React from 'react';

import { Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import styles from './flightList.css';

const FlightsList = ({ flights }) => {
	return (
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
					{flights.map(flight => {
						return (
							<TableRow key={flight.id}>
								<TableCell component="th" scope="row">{flight.from}</TableCell>
								<TableCell>{flight.startTime}</TableCell>
								<TableCell>{flight.to}</TableCell>
								<TableCell>{flight.endTime}</TableCell>
								<TableCell>{flight.boardNumber}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Paper>
	);
};

export default FlightsList;