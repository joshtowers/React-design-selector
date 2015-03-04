var gulp        = require('gulp');
var browserify  = require('gulp-browserify');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var fileinclude = require('gulp-file-include');

gulp.task('browserify', function() {
    gulp.src('src/js/main.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'));
});

gulp.task('copy-markup', function() {
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-assets', function() {
  gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('sass', function () {
  gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(gulp.dest('dist-html/css'));
});

gulp.task('fileinclude', function() {
  gulp.src(['html/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: 'html/partials/'
    }))
    .pipe(gulp.dest('dist-html'));
});

gulp.task('default',['browserify', 'copy-markup', 'copy-assets', 'sass', 'fileinclude']);
gulp.task('watch', function() {
    gulp.watch(['src/**/*.*', 'html/**/*.*'], ['default']);
});
