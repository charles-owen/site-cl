const path = require('path');
const WebpackChunkRenamerPlugin = require('webpack-chunk-renamer-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: 50,
            minSize: 1000000,
            cacheGroups: {
                common: {
	                test: /[\\/](dialog-cl)|(resizer-cl)|(icons-cl)|(dompurify)[\\/]/,
                    name: 'common',
                    minChunks: 1,
                    priority: 0,
                    minSize: 0
                },
                vendors: {
                    test: /([\\/](node_modules)|(packages)[\\/])/,
                    name: 'vendor',
                    minChunks: 2,
                    priority: -5,
	                minSize: 0
                }
            }
        }
    },
    plugins: [
        new WebpackChunkRenamerPlugin({
            'vendor': 'vendor.dev.js',
            'common': 'common.dev.js',
	        initialChunksWithEntry: true
        })
    ],
    output: {
        filename: '[lc-name].dev.js',
        chunkFilename: '[name].[chunkhash].dev.js',
	    publicPath: '/cl/dist/'
    }
}
