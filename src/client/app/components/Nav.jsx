import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const Nav = ({ menuItems, status, onClickEvent }) => {

	const onClick = (event) => {
		event.preventDefault();
		if (typeof onClickEvent === 'function') {
			onClickEvent(event);
		}
	};

	return (
		<div>
			{menuItems.map((item, i) => (
				<Button
					onClick={onClick}
					color={(item.status === status) ? 'primary' : 'default'}
					data-status={item.status}
					key={i}
				>{item.text}</Button>
			))}
		</div>
	)
};

Nav.propTypes = {
	 menuItems: PropTypes.arrayOf(
	 	PropTypes.shape({
		    text: PropTypes.string,
		    status: PropTypes.string,
		})
	 ),
	 status: PropTypes.string,
	 onClickEvent: PropTypes.func.isRequired,
};

export default Nav;
