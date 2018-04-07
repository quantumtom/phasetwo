const path = require('path');
const exportPlugin = require('./exportPlugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    mode: 'production',

    plugins: [
        new exportPlugin(),
        new CleanWebpackPlugin(['dist/*']),
    ],
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'bcone',
        libraryTarget: 'amd',
        publicPath: 'https://addons.redbull.com/us/bcone/'
    }

});
