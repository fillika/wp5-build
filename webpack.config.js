const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = process.env.NODE_ENV === 'production'
    ? 'production'
    : 'development';

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Очищает директорию dist перед обновлением бандла
    },
    devtool: 'source-map',
    devServer: {
        hot: true, // Включает автоматическую перезагрузку страницы при изменениях
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
}