var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

gulp.task('vendorimages-reload', ['vendorimages-tmp'], function() {
  return buildImages()
    .pipe(browserSync.stream());
});

gulp.task('vendorimages-tmp', function() {
  return buildImages();
});

var buildImages = function() {
  var srcPaths = [];
  for (var i = 0, len = conf.images.vendor_images.length; i < len; i++) {
    srcPaths.push(path.join(conf.paths.base, conf.images.vendor_images[i]));
  }

  return gulp.src(srcPaths)
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/img/')));
};
