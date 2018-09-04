const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
	entry: {
		Site: path.resolve(__dirname, 'index.js')
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin({
			multiStep: false
		}),
		new VueLoaderPlugin(),
		new CopyWebpackPlugin([
			{from: path.resolve(__dirname, 'cl'), to: '..'}
		])
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
		}
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				use: [ 'raw-loader' ]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components|ckeditor5-cl)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-dynamic-import']
					}
				}
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				loader:"url-loader",
				query:{
					limit: 8000,
					name:'[name].[ext]',
					outputPath:'/img/'
				}
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'resolve-url-loader',
					'sass-loader?sourceMap'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	}
}