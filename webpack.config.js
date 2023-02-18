const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const appHtmlTitle = 'Roxrite Webpack Compilation';

module.exports = {
    entry: {
        index: './public/index.js',
        main: './public/main.js'
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
                        minimize: true
                    }
                }],
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, './public/index.ejs'),
            title: appHtmlTitle
        })
    ]
};
