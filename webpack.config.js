var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
var StyleLoader = require('style-loader');
var CSSLoader = require('css-loader');

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
            }
        ]
    },
    
    output: {
        filename: 'transformed.js',
        path: __dirname + '/build'
    },
    
    plugins: [HTMLWebpackPluginConfig]
};