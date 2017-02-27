const path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin');

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
        exclude: [/node_modules/, /bower_components/],
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
	},
  plugins: [
    new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: "./" }
        }, { reload: true })
  ]
}