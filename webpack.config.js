const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const appHtmlTitle = 'Webpack Compilation';

module.exports = {
    entry: {
        index: './src/index.js',
        main: './src/main.js'
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
    devServer: {
        compress: true,
        port: 9000
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, 'src/index.ejs'),
            title: appHtmlTitle
        })
    ]
};
