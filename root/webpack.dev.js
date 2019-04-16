const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const site = require('./vendor/cl/site/webpack.dev');

module.exports = merge(common, site, {
	output: {
		path: path.resolve(__dirname, 'cl/dist'),
	}
});
