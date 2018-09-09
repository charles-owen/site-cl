const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
	plugins: [
		new FileManagerPlugin({
			onStart: {
				delete: [
					path.resolve(__dirname, '../../../cl/dist/site.video.*.js'),
					path.resolve(__dirname, 'dist/site.video.*.js')
				]
			},
			onEnd: {
				copy: [
					{source: path.resolve(__dirname, '../../../cl/dist/vendor.js'), destination: path.resolve(__dirname, 'dist') },
					{source: path.resolve(__dirname, '../../../cl/dist/runtime.js'), destination: path.resolve(__dirname, 'dist') },
					{source: path.resolve(__dirname, '../../../cl/dist/site.video.*.js'), destination: path.resolve(__dirname, 'dist') },
					{source: path.resolve(__dirname, '../../../cl/dist/site.js'), destination: path.resolve(__dirname, 'dist') }
				]
			}
		})
	]
}