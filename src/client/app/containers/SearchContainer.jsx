import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { TextField, Button } from '@material-ui/core';

import { handleSearchRequest } from '../actions/search';

class SearchContainer extends PureComponent {
	static propTypes = {
		searchRequest: PropTypes.string,
		handleSearchRequest: PropTypes.func
	};

	onChangeEvent = (event) => {
		const { handleSearchRequest } = this.props;

		if (typeof handleSearchRequest === 'function') {
			handleSearchRequest(event.currentTarget.value);
		}

		event.preventDefault();
	};

	onClickEvent = (event) => {
		const { handleSearchRequest } = this.props;

		if (typeof handleSearchRequest === 'function') {
			handleSearchRequest('');
		}

		event.preventDefault();
	};

	render() {
		const { searchRequest } = this.props;
		return (
			<div>
				<TextField label="Board Number" value={searchRequest} onChange={this.onChangeEvent} />
				{ searchRequest && <Button onClick={this.onClickEvent}>Очистить</Button> }
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		searchRequest: state.searchRequest
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleSearchRequest: (request) => handleSearchRequest(dispatch)(request),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
