var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var start = require('gulp-start-process');

gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('build', function (cb) {
    start('node_modules/.bin/jspm bundle-sfx lib/index.jsx!', cb);
});

gulp.task('watch', function () {
    watch(['lib/**/*'], function () {
        gulp.start('build');
    });

    watch(['!jspm_packages', 'index.html', 'css/**/*', 'build.js'])
        .pipe(connect.reload());
});

gulp.task('default', ['connect', 'build', 'watch']);
