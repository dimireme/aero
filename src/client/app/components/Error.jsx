import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ message }) => (
	<div>Fail flights loading: {message}</div>
);

Error.propTypes = {
	message: PropTypes.string,
};

export default Error;
