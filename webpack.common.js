const path = require('path');

module.exports = {

	entry: ['babel-polyfill', path.join(__dirname, 'src', 'client', 'app', 'index')],

	output: {
		path: path.join(__dirname, 'docs'),
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['.js', '.jsx']
	},

	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: path.join(__dirname, 'src', 'client', 'app'),
				use: 'babel-loader'
			}
		]
	}
};
