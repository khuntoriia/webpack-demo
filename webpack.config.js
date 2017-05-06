/**
 *
 * Created by paris on 2017/5/6.
 */
var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry:['./file1.js','./file3.js'],
  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:"bundle.js"
  },
  module:{
    rules:[
      {
        //test:/\.css$/,
        //loader:"css-loader style-loader"
        test: /\.css$/,
        use: 'css-loader',
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
};
/* 不是必须
module.exports.plugins = (module.exports.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })
]);*/
