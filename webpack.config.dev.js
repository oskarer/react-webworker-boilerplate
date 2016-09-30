var path = require('path');
var webpack = require('webpack');

module.exports = {
  target: 'webworker',
  devtool: 'source-map',
  entry: {
    'app': [
      './src/app',
    ],
    'app-worker': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/app-worker.js',
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'www', 'dist'),
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    }]
  },
};
