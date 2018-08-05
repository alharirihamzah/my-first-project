const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

process.env.NODE_ENV = 'development'

module.exports = {
	entry: './src/js/index.js',

	output: {
		publicPath: '/',
		filename: 'build.js',
		path: path.join(__dirname, 'build')
	},

	devtool: 'source-map',

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src/js/'),
			style: path.resolve(__dirname, 'src/style/'),
			utils: path.resolve(__dirname, 'src/js/utils/'),
			actions: path.resolve(__dirname, 'src/js/actions/'),
			reducers: path.resolve(__dirname, 'src/js/reducers/'),
			languages: path.resolve(__dirname, 'src/js/languages/'),
			components: path.resolve(__dirname, 'src/js/components/')
		},
		extensions: ['*', '.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				include: /node_modules/,
				loaders: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					publicPath: ".",
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: false,
								importLoaders: 1,
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								plugins: () => [autoprefixer('last 2 versions')]
							}
						},
						{
							loader: 'sass-loader'
						}
					]
				})
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new HtmlWebpackPlugin({
			template: 'index.ejs',
			title: 'My first project',
		}),
		new ExtractTextPlugin('style.css'),
		new webpack.LoaderOptionsPlugin({
			options: {
				context: '/'
			}
		})
	]
}