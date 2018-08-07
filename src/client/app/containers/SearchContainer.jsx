import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleSearchRequest } from '../actions/search';

class SearchContainer extends PureComponent {
	static propTypes = {
		request: PropTypes.string,
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
		const { request } = this.props;
		return (
			<div>
				<input onChange={this.onChangeEvent} value={request}/>
				<button onClick={this.onClickEvent}>Отмена</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		request: state.searchRequest
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleSearchRequest: (request) => handleSearchRequest(dispatch)(request),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
