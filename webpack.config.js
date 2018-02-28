/* eslint-env node */
'use strict';
const {join} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity');

module.exports = {
	target: 'web',
	devtool: 'source-map',
	entry: {
		myapp: './src/myapp.js'
	},
	output: {
		path: join(__dirname, 'dist'),
		publicPath: '/',
		crossOriginLoading: 'anonymous',
		filename: '[hash].[name].js',
		chunkFilename: '[hash].chunk.[id].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			hash: true,
			filename: 'index.html'
		}),
		new SriPlugin({
			enabled: true,
			hashFuncNames: ['sha256', 'sha384']
		})
	]
};
