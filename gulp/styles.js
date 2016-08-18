'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var bourbon = require("bourbon");

gulp.task('styles-reload', ['styles'], function() {
  return buildStyles()
    .pipe(browserSync.stream());
});

gulp.task('styles', function() {
  return buildStyles();
});

var buildStyles = function() {
  var sassOptions = {
    style: 'expanded',
    includePaths: bourbon.includePaths
  };

  var injectPaths = [
    path.join(conf.paths.src, '/assets/**/*.scss'),
    path.join('!' + conf.paths.src, '/app/index.scss')
  ];

  for (var i = 0, len = conf.styles.vendor_styles.length; i < len; i++) {
    injectPaths.push(path.join(conf.paths.base, conf.styles.vendor_styles[i]));
  }

  console.log(injectPaths);

  var injectFiles = gulp.src(injectPaths, { read: false });

  var injectOptions = {
    transform: function(filePath) {
      filePath = filePath.replace(conf.paths.src + '/app/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

  var srcPaths = [
    path.join(conf.paths.src, '/assets/**/index.scss')
  ];

  for (var i = 0, len = conf.styles.vendor_styles.length; i < len; i++) {
    srcPaths.push(path.join(conf.paths.base, conf.styles.vendor_styles[i]));
  }

  return gulp.src(srcPaths)
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.sourcemaps.init())
    .pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
};
