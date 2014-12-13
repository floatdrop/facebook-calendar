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

gulp.task('tests', function (cb) {
    watch(['test/**/*', 'lib/**/*'], function () {
        start('npm test', cb);
    });

});

gulp.task('default', ['connect', 'watch']);
