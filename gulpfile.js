'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify');

gulp.task('styles', function() {
    gulp.src('PersonalAngular2/wwwroot/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('PersonalAngular2/wwwroot/css/'))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('styles:watch', function () {
  gulp.watch('PersonalAngular2/wwwroot/sass/**/*.scss', ['styles']);
});


gulp.task('default', ['styles'], function() {
    gulp.start('styles');
    gulp.start('styles:watch');
});