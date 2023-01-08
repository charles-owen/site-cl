const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        chunkFilename: '[name].js',
        publicPath: '/cl/dist'

    }
}
