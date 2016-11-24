const path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
  entry:'./src/index.jsx',
  output:{
    filename:'./bundle.js'
  },
  module: {
    preLoaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				exclude: [/node_modules/, /bower_components/],
				loader: 'eslint-loader'
			}
		],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  },
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
  eslint: {
		configFile: '.eslintrc'
	}
}