const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './public')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			}, {
				test: /\.(s*)css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}, {
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: {
							minimize: true
						}
					}
				]
			}, {
				test: /\.(png|jpg|woff|svg|eot|ttf|woff2)$/,
				loader: 'url-loader?limit=8192&name=images/[name].[ext]'
			}, {
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[hash].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({template: "./src/index.html"}),
		new ExtractTextPlugin({filename: 'app.bundle.css'})
	]
};
