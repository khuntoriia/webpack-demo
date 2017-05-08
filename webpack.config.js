/**
 *
 * Created by paris on 2017/5/6.
 */
var path = require('path');
var webpack = require("webpack");
var ChunkManifestPlugin = require("chunk-manifest-webpack-plugin");
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ManifestPlugin = require("webpack-manifest-plugin");
var WebpackChunkHash = require("webpack-chunk-hash");
module.exports = {
  entry:{
    home:"./file1.js",
    vender:"moment"
  },
  output:{
    path:path.resolve(__dirname,'./dist'),
    filename:"[name].[chunkhash].bundle.js",
    chunkFilename: "[name].[chunkhash].js"
  },
  //module:{
  //  rules:[
  //    {
  //      //test:/\.css$/,
  //      //loader:"css-loader style-loader"
  //      test: /\.css$/,
  //      use: 'css-loader',
  //      use: ExtractTextPlugin.extract({
  //        use: 'css-loader'
  //      })
  //    }
  //  ]
  //},
  plugins: [
    //new ExtractTextPlugin('styles.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name:['vender','manifest'],
      minChunks:Infinity
      //name:'vender'
    }),
    new ManifestPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new WebpackChunkHash(),
    new ChunkManifestPlugin({
      filename:"chunk-manifest.json",
      manifestVariable:"webpackManifest"
    })
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
