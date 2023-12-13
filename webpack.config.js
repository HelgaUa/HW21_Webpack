const path = require("path");
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const terserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: {
        main:[
            path.resolve(__dirname, 'src/index.js'),
            path.resolve(__dirname, 'src/style.scss'),
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    optimization: {
        minimizer: [new terserPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [miniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ]
    },
    plugins: [new miniCssExtractPlugin()]
}