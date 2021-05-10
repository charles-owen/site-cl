const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require('path');
const WebpackChunkRenamerPlugin = require('webpack-chunk-renamer-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin(),

            new OptimizeCSSAssetsPlugin({})
        ],
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
	    // new BundleAnalyzerPlugin(),
        new WebpackChunkRenamerPlugin({
	        'vendor': 'vendor.min.js',
	        'common': 'common.min.js',
	        initialChunksWithEntry: true
        }),
	    new FileManagerPlugin({
            events: {
                onStart: {
                    delete: [
                        path.resolve(__dirname, '../../cl/dist/site.video.*.min.js')
                    ]
                }
            }
	    }),
	    new WebpackManifestPlugin({
		    fileName: 'manifest.min.json'
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
