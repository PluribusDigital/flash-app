'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var replace = require('gulp-replace-task');
var rename = require("gulp-rename");

gulp.task('travis-rename-config', function() {
  return gulp.src(conf.paths.src + '/app/app.deploy.config.js')
    .pipe(rename("/app/app.config.js"))
    .pipe(gulp.dest(conf.paths.src));
});

// Set correct deployment config variables
gulp.task('travis-deploy-vars', ['travis-rename-config'], function() {
  var branchName = process.env.TRAVIS_BRANCH;
  var deployEnv = 'DEVELOP'
  switch(branchName) {
    case 'master':
      deployEnv = 'PROD';
      break;
    case 'stage':
      deployEnv = 'STAGE';
      break;
    default:
      deployEnv = 'DEVELOP';
  }
  var settings = {
    apiKey: eval("process.env." + deployEnv + "_API_KEY"),
    baseUrl: eval("process.env." + deployEnv + "_FLASH_API_ENDPOINT")
  }
  return gulp.src(conf.paths.src + '/app/app.config.js')
    .pipe(replace({
      patterns: [
        {
          match: 'apiKey',
          replacement: settings.apiKey || ''
        },
        {
          match: 'baseUrl',
          replacement: settings.baseUrl || ''
        }
      ]
    }))
    .pipe(gulp.dest(conf.paths.src + '/app/'));
});

gulp.task('travis-pre-build', ['travis-deploy-vars']);
