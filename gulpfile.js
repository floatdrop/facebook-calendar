var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('watch', function () {
    watch(['!jspm_packages', 'index.*', 'css/**/*', 'lib/**/*'])
        .pipe(connect.reload());
});

gulp.task('default', ['connect', 'watch']);
