var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var start = require('gulp-start-process');

gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('watch', function () {
    watch(['!jspm_packages', 'lib/**/*', 'index.html', 'css/**/*'])
        .pipe(connect.reload());
});

gulp.task('test', function (cb) {
    start('npm test', cb);
});

gulp.task('tests', function () {
    gulp.start('test');
    watch(['test/**/*', 'lib/**/*'], function () {
        gulp.start('test');
    });

});

gulp.task('default', ['connect', 'watch']);
