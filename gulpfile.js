var gulp = require('gulp');
var rename = require('gulp-rename');

var source = require('vinyl-source-stream');

var exorcist = require('exorcist');

var browserify = require('browserify');
var debowerify = require('debowerify');
var tsify = require('tsify');

var uglifyJs = require('gulp-uglify');


var config = {
  bowerDir: __dirname + '/bower_components',
  applicationDir: __dirname + '/src',
  publicDir: __dirname + '/dist'
};


// ====== APPLICATION


/**
 * Compile ts files to js and save result to public directory
 */
gulp.task('default', function() {
  var bundler = browserify({
    basedir: config.applicationDir,
    debug: true
  })
    .add(config.applicationDir + '/index.ts')
    .plugin(tsify)
    .transform(debowerify);

  return bundler.bundle()
    .pipe(exorcist(config.publicDir + '/app.js.map'))
    .pipe(source('app.js'))
    .pipe(gulp.dest(config.publicDir));
});


/**
 * Minify result js file
 */
gulp.task('uglify-js', ['compile-js'], function() {
  return gulp.src(config.publicDir + '/app.js')
    .pipe(uglifyJs())
    .pipe(rename('application.min.js'))
    .pipe(gulp.dest(config.publicDir));
});
