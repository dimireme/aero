import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';

import { loadFlights } from '../actions/flight';

class NavContainer extends PureComponent {
	static propTypes = {
		loadFlights: PropTypes.func,
	};

	constructor(props) {
		super(props);

		this.state = {
			menuItems: [
				{text: 'Вылет',             status:'departed', isSelected: true},
				{text: 'Прилет',            status:'arrived',  isSelected: false},
				{text: 'Задержанные рейсы', status:'delayed',  isSelected: false},
			]
		}

	}

	componentDidMount() {
		const menuItems = this.state.menuItems;
		const status = getStatusBySelected(menuItems);
		this.props.loadFlights(status);
	}

	onClickEvent = (event) => {
		event.preventDefault();

		// update status in local state
		const menuItems = this.state.menuItems;
		const status = getStatusBySelected(menuItems);
		const newStatus = event.currentTarget.dataset.status;
		if(status !== newStatus ) {
			const newMenuItems = menuItems.map((item) => {
				return {
					...item,
					isSelected: (item.status === newStatus),
				}
			});
			this.setState({
				menuItems: newMenuItems,
			});
		}

		// load new list of flights
		const { loadFlights } = this.props;
		if (typeof loadFlights === 'function') {
			loadFlights(newStatus);
		}
	};


	render() {
		const { menuItems } = this.state;
		console.log(menuItems);
		return (
			<div>
				{menuItems.map((item, i) =>
					<Button
						onClick={this.onClickEvent}
						color={item.isSelected ? 'primary' : 'default'}
						data-status={item.status}
						key = {i}
					>{item.text}</Button>
				)}
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		loadFlights: (status) => loadFlights(dispatch)(status),
	}
}

function getStatusBySelected(menuItems) {
	return menuItems.reduce(
		(acc, item) => {
			if (item.isSelected) {
				acc = item.status;
			}
			return acc;
		}, menuItems[0].status
	);
}

export default connect(null, mapDispatchToProps)(NavContainer);
