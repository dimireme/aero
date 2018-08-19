import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

class Nav extends PureComponent {
	static propTypes = {
		menuItems: PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string,
				status: PropTypes.string,
			})
		),
		status: PropTypes.string,
		onClickEvent: PropTypes.func.isRequired,
	};

	onClick = (event) => {
		event.preventDefault();
		const { onClickEvent } = this.props;
		if (typeof onClickEvent === 'function') {
			onClickEvent(event);
		}
	};

	render() {
		const { menuItems, status } = this.props;
		return (
			<div>
				{menuItems.map((item, i) =>
					<Button
						onClick={this.onClick}
						color={(item.status === status) ? 'primary' : 'default'}
						data-status={item.status}
						key = {i}
					>{item.text}</Button>
				)}
			</div>
		)
	};
}

export default Nav;
