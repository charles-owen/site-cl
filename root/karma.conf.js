var webpackConfig = require('./webpack.karma.js');

//
// Karma configuration
//

module.exports = function (config) {
    config.set({
        webpack: webpackConfig,
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'tests/jasmine/all.js'
        ],
        exclude: [],
        preprocessors: {
            'tests/jasmine/all.js': ['webpack', 'sourcemap']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        autoWatch: true,
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
}
