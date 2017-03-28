const path = require('path'),
      webpack = require('webpack')

var ExtractTextPlugin = require("extract-text-webpack-plugin")
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports={
  entry: {
		master: './src/main.jsx'
  },
  output:{
    filename:'./[name].js'
  },
  module: {
    preLoaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				exclude: [/node_modules/],
				loader: 'eslint-loader'
			}
		],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        loaders: ['babel-loader']
      }
    ]
  },
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
  externals: {
      "jQuery": "jQuery"
  },
  eslint: {
		configFile: '.eslintrc'
	},
  plugins: [
    new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: "./" }
        }, { reload: true })
  ]
}