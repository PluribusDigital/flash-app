var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

gulp.task('vendorfonts-reload', ['vendorfonts-tmp'], function() {
  return buildFonts()
    .pipe(browserSync.stream());
});

gulp.task('vendorfonts-tmp', function() {
  return buildFonts();
});

var buildFonts = function() {
  var srcPaths = [];
  for (var i = 0, len = conf.fonts.vendor_fonts.length; i < len; i++) {
    srcPaths.push(path.join(conf.paths.base, conf.fonts.vendor_fonts[i]));
  }

  return gulp.src(srcPaths)
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/fonts/')));
};
