const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');

gulp.task('serve', function () {
    browserSync.init({ server: './' });

    gulp.watch('./index.html', ['index']);
});

gulp.task('index', function () {
    gulp.src('./index.html')
        .pipe(browserSync.stream());
});

gulp.task('script', function () {
    return rollup.rollup({
        entry: 'src/main.js',
        plugins: [
            resolve(),
            babel({
                exclude: "node_modules/**"
            })
        ]
    }).then(function (bundle) {
        bundle.write({
            format: "iife",
            dest: "dist/dist.js"
        })
    })
})