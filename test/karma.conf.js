module.exports = function(config) {
  var configuration = {
    basePath: '../',
    frameworks: ['jasmine'],
    files: [
      'lib/angular.min.js',
      'lib/angular-mocks.js',
      'src/**/*.js',
      'test/**/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  }
}
