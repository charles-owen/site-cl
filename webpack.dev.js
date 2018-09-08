const path = require('path');
const WebpackChunkRenamerPlugin = require('webpack-chunk-renamer-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');

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
