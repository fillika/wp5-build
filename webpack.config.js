const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');

let mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Очищает директорию dist перед обновлением бандла
    },
    devtool: 'source-map',
    devServer: {
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    mode,
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.((s[ac]|s)ss)|(.css)$/i,
                use: [miniCss.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
        new miniCss({
            filename: 'style.css',
        }),
    ],
};
