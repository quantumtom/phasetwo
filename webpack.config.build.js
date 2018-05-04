const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    mode: 'production',

    devtool: 'cheap-module-source-map',

    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            names: ['index', 'main']
        })
    ],
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'a2wLib',
        libraryTarget: 'amd',
        publicPath: 'https://addons.redbull.com/us/a2w/'
    }

});
