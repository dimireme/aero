import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

class Nav extends PureComponent {
	static propTypes = {
		onClickEvent: PropTypes.func.isRequired,
		menuItems: PropTypes.arrayOf(
			PropTypes.shape({
				text: PropTypes.string,
				status: PropTypes.string,
				isSelected: PropTypes.bool
			})
		),
	};

	onClick = (e) => {
		const { onClickEvent } = this.props;
		if (typeof onClickEvent === 'function') {
			onClickEvent(e);
		}
		e.preventDefault();
	};

	render() {
		const { menuItems } = this.props;
		return (
			<div>
				{menuItems.map((item, i) =>
					<Button
						onClick={this.onClick}
						color={item.isSelected ? 'primary' : 'default'}
						data-status={item.status}
						key = {i}
					>{item.text}</Button>
				)}
			</div>
		)
	};
}

export default Nav;
