const path = require('path');
const WebpackChunkRenamerPlugin = require('webpack-chunk-renamer-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    optimization: {
        runtimeChunk: {
            name: 'runtime'
        },
        splitChunks: {
            chunks: 'all',
            minChunks: 20,
            minSize: 1000000,
            cacheGroups: {
                vendors: {
                    test: /[\\/](node_modules)|(packages)[\\/]/,
                    name: 'vendor',
                    minChunks: 2,
                    priority: -5
                }
            }
        }
    },
    plugins: [
        new WebpackChunkRenamerPlugin({
            'vendor': 'vendor.js',
	        initialChunksWithEntry: true
        }),
	    new ManifestPlugin()
    ],
    output: {
        filename: '[lc-name].js',
        chunkFilename: '[name].[chunkhash].js',
        library: '[name]',
        libraryTarget: 'umd',
	    publicPath: '/cl/dist/'
    },
    devServer: {
        compress: true,
        port: 9000,
        hot: true,
        index: '',
	    publicPath: '/cl/dist/'
    }
}
