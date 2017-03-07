var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('less', function() {
    gulp.src('less/fef.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('js', function() {
    gulp.src(['js/modules/tween.js',
              'js/modules/menu.js',
              'js/modules/scrolltotop.js',
              'js/modules/tab.js',
              'js/modules/slider.js',
              'js/modules/bind.js'])
        .pipe(concat('fef.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('auto', function() {
    gulp.watch('less/modules/*.less', ['less']);
    gulp.watch('js/modules/*.js', ['js']);
});
