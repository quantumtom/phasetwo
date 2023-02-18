const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const appHtmlTitle = 'Webpack Compilation';

module.exports = {
    entry: {
        index: './src/index.js',
        main: './src/main.js'
    },
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        library: 'phase3-lib',
        libraryTarget: 'amd'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        removeComments: false,
                        collapseWhitespace: false
                    }
                }],
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*']),
        new HTMLWebpackPlugin({
            template: path.join(__dirname, 'src/index.ejs'),
            title: appHtmlTitle
        })
    ]
};
