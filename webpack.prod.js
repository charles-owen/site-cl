const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');
const WebpackChunkRenamerPlugin = require('webpack-chunk-renamer-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
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
                    priority: -5,
                }
            }
        }
    },
    plugins: [
	    // new BundleAnalyzerPlugin(),
        new WebpackChunkRenamerPlugin({
            'vendor': 'vendor.min.js',
	        initialChunksWithEntry: true
        }),
	    new FileManagerPlugin({
		    onStart: {
			    delete: [
				    path.resolve(__dirname, '../../../cl/dist/site.video.*.min.js'),
				    path.resolve(__dirname, 'dist/site.video.*.min.js')
			    ]
		    },
		    onEnd: {
			    copy: [
				    {source: path.resolve(__dirname, '../../../cl/dist/vendor.min.js'), destination: path.resolve(__dirname, 'dist') },
				    {source: path.resolve(__dirname, '../../../cl/dist/runtime.min.js'), destination: path.resolve(__dirname, 'dist') },
				    {source: path.resolve(__dirname, '../../../cl/dist/site.video.*.min.js'), destination: path.resolve(__dirname, 'dist') },
				    {source: path.resolve(__dirname, '../../../cl/dist/site.min.js'), destination: path.resolve(__dirname, 'dist') }
			    ]
		    }
	    })
    ],
    performance: {
        maxEntrypointSize: 500000,
        maxAssetSize: 500000
    },
    output: {
        filename: '[lc-name].min.js',
        chunkFilename: '[name].[chunkhash].min.js',
        library: '[name]',
        libraryTarget: 'umd',
        publicPath: '/cl/dist/'
    },
}
