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
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    singleRun: true
    };
  if(process.env.TRAVIS){
  configuration.browsers = ['Chrome_travis_ci'];
  }
  config.set(configuration);
};
