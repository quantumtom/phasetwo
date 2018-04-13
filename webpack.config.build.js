const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const SplitChunksPlugin = require('split-chunks-plugin');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    mode: 'production',

    devtool: 'cheap-module-source-map',

    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            names: ['index', 'main']
        }),
        new SplitChunksPlugin(['dist'])
    ],
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'yournamehere',
        libraryTarget: 'amd',
        publicPath: 'https://addons.redbull.com/us/yournamehere/'
    }

});
