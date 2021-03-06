// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage/my-test'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    restartOnFileChange: false,
    thresholds: {
      emitWarning: false, // set to `true` to not fail the test command when thresholds are not met
      // thresholds for all files
      global: {
        statements: 100,
        lines: 100,
        branches: 100,
        functions: 100
      },
      // thresholds per file
      each: {
        statements: 100,
        lines: 100,
        branches: 100,
        functions: 100,
        overrides: {
          'baz/component/**/*.js': {
            statements: 98
          }
        }
      }
    }
  });
};
