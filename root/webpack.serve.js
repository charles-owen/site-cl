const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const site = require('./vendor/cl/site/webpack.dev');

module.exports = merge(common, site, {
	output: {
		path: path.resolve(__dirname, 'cl/dist'),
	},
	devServer: {
		contentBase: path.join(__dirname),
		host: 'localhost',
		proxy: {
			context: () => true,
			'/': 'http://localhost'
		}
	}
});
