const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const pkg = require('./package.json');
const name = pkg.name;

module.exports = merge(webpackConfig, {

    mode: 'development',

    devtool: 'eval',

    output: {
        pathinfo: true,
        publicPath: '/',
        library: name,
        libraryTarget: 'umd',
        filename: '[name].js'
    }

});
