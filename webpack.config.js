const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.jsx"],
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname, 'webpackDist'),
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {test: /\.(css|less)$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource',},
            {
                test: /\.m?js$/, exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {presets: ['@babel/preset-env']}
                }
            },
            {
                test: /\.m?jsx$/, exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {presets: ['@babel/preset-env', '@babel/preset-react']}
                }
            }
        ]
    }
}