const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		Site: path.resolve(__dirname, 'index.js')
	},
	plugins: [
		new VueLoaderPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'cl'),
					to: path.resolve(__dirname, '../../../cl')
				},
				{
					from: path.resolve(__dirname, 'img'),
					to: path.resolve(__dirname, '../../../cl/img')
				},
				{
					from: path.resolve(__dirname, 'site.css'),
					to: path.resolve(__dirname, '../../../cl')
				},
				{
					from: path.resolve(__dirname, 'site.css.map'),
					to: path.resolve(__dirname, '../../../cl')
				}
			]
		})
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
						"presets": [
							["@babel/env"]
						],
						plugins: ['@babel/plugin-transform-runtime', '@babel/plugin-syntax-dynamic-import']
					}
				}
			},
			{
				test: /\.png/,
				type: 'asset/inline'
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'resolve-url-loader',
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					}
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