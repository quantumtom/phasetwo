const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    mode: 'production',

    devtool: 'cheap-module-source-map',

    output: {
        filename: '[name]-[contentHash].js',
        path: path.resolve(__dirname, 'src'),
        publicPath: '/dist',
        library: 'phase3-lib',
        libraryTarget: 'amd'
    }

});
