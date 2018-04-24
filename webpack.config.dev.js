const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    mode: 'development',

    devtool: 'eval',
    // devtool: 'cheap-module-source-map',

    output: {
        pathinfo: true,
        publicPath: '/',
        library: 'reign',
        libraryTarget: 'umd',
        filename: '[name].js'
    }

});
