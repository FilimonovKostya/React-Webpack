const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, 'webpackDist'),
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {test: /\.(css|less)$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource',}
        ]
    }
}