const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[lc-name].js',
        chunkFilename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        libraryExport: "default",
        publicPath: ''
    }
}
