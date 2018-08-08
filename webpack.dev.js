const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {

	mode: 'development',

	devServer: {
		contentBase: path.join(__dirname, 'src', 'client', 'dev'),
		compress: true,
		port: 9000,
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				include: path.join(__dirname, 'src', 'client', 'app'),
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]--[hash:base64:5]'
						}
					}
				]
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
});
