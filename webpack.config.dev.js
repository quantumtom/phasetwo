const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {

    devtool: 'eval',

    output: {
        pathinfo: true,
        publicPath: '/',
        library: 'roxrite-lib',
        libraryTarget: 'umd',
        filename: '[name].js'
    }

});
