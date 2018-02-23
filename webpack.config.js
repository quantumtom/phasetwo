const path = require('path');
const exportPlugin = require('./exportPlugin');

// new webpack.DefinePlugin({"process.env": {
//         NODE_ENV: '"development"'
//     }}),

module.exports = {
    entry: [
        './src/index.js',
        './src/main.js'
    ],
    output: {
        filename: 'bundle-[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'https://addons.redbull.com/us/phasetwo/dist/',
        library: 'phasetwo',
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
    plugins: [
        new exportPlugin()
    ]
};
