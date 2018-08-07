const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {

	mode: 'production',

	module: {
		rules: [
			{
				test: /\.css$/,
				include: path.join(__dirname, 'src', 'client', 'app'),
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]--[hash:base64:5]'
						}
					}
				],
			},
		]
	},

	plugins: [
		new HtmlWebPackPlugin({
			template: path.join(__dirname, 'src', 'template.html'),
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'styles.css',
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	],
});
