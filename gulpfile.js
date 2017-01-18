(function main() {

    var gulp        = require('gulp'),
        concat      = require('gulp-concat'),
        minifyCSS = require("gulp-clean-css"),
        processhtml = require('gulp-processhtml');//替换处理压缩合并后的js和css的链接

    gulp.task('concat', function() {
        gulp.src('example/js/*.js').pipe(concat('all.js')).pipe(gulp.dest('app/js'));
    });
    gulp.task('css', function() {
        gulp.src('example/css/*.css').pipe(concat('main.css')).pipe(gulp.dest('app/css'));
    });
    gulp.task('processhtml', function() {
        gulp.src('example/index.html').pipe(processhtml()).pipe(gulp.dest("app"));
    });

    gulp.task('default', ['css','concat','processhtml']);

})();