const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    mode: 'development',

    devtool: 'eval',

    output: {
        pathinfo: true,
        publicPath: '/',
        library: 'yournamehere',
        libraryTarget: 'umd',
        filename: '[name].js'
    }

});
