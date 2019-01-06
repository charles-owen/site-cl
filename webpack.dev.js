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
                    test: /[\\/](node_modules)|(packages)[\\/]/,
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
            'vendor': 'vendor.js',
            'common': 'common.js',
	        initialChunksWithEntry: true
        }),
	    new FileManagerPlugin({
		    onStart: {
			    delete: [
				    path.resolve(__dirname, '../../../cl/dist/site.video.*.js'),
				    path.resolve(__dirname, 'dist/site.video.*.js')
			    ]
		    }
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
