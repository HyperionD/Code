const gulp = require('gulp');
const gulpLivereload = require('gulp-livereload');
const browserSync = require('browser-sync').create();

gulp.task('serve', function () {
    browserSync.init({ server: './' });

    gulp.watch('./index.html', ['index']);
});

gulp.task('index', function () {
    gulp.src('./index.html')
        .pipe(browserSync.stream());
})