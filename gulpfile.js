var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');

gulp.task('react', function () {
  return browserify({entries: './js/app.js', extensions: ['js'], debug: true})
    .transform('babelify', {presets: ['es2015', 'react', 'stage-0']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
});

gulp.task('prod', function () {

});

gulp.task('watch', ['react', 'sass', 'browser-sync'], function () {
  //browserSync.init({
  //  server: "./"
  //});

  gulp.watch('./js/**/*.js', ['react']);
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync.init(null, {
    proxy: "http://localhost:3000",
    files: ["./**/*.*"],
    browser: "google chrome",
    port: 4000
  });
});

gulp.task('nodemon', function (cb) {
  var started = false;

  return nodemon({
    script: 'server.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task('default', ['watch']);
