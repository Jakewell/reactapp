var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

var StyleLoader = require('style-loader');
var CSSLoader = require('css-loader');
var FileLoader = require('file-loader');
var URLLoader = require('url-loader');

module.exports = {
    entry: __dirname + '/app/index.js',
    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            },
            
            {
                test: /\.(png|jpg|ico)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=10000&name=[path][name].[ext]'
            }
        ]
    },
    
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    
    plugins: [HTMLWebpackPluginConfig]
};