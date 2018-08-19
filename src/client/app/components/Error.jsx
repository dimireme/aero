import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message, children }) => {
	if (message) {
		return <div>Unexpected error detected: {message}</div>
	}
	return children;
};

Error.propTypes = {
	message: PropTypes.string,
};

export default Error;
