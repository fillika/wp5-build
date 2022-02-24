const path = require('path');

let mode = process.env.NODE_ENV === 'production'
    ? 'production'
    : 'development';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Очищает директорию dist перед обновлением бандла
    },
    devtool: 'source-map',
    devServer: {
        hot: true, // Включает автоматическую перезагрузку страницы при изменениях
    },
    mode,

}