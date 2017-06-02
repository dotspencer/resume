var path = require('path');

var htmlPlugin = require('html-webpack-plugin');
var htmlPluginConfig = new htmlPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html'
});

var extractPlugin = require('extract-text-webpack-plugin');
var extractPluginConfig = new extractPlugin('style.css');

// var copyPlugin = require('copy-webpack-plugin');
// var copyPluginConfig = new copyPlugin([
//   {
//     from: __dirname + '/public/img',
//     to: __dirname + '/dist/img'
//   }
// ]);

module.exports = {
  entry: path.resolve(__dirname + '/src/main.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname + '/docs')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [htmlPluginConfig, extractPluginConfig]
}
