const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const vue = require('rollup-plugin-vue');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');

gulp.task('serve', ["js"], function () {
    browserSync.init({ server: './' });

    gulp.watch('./index.html', ['change']);
    gulp.watch('./src/*.js', ["js-watch"]);
});

gulp.task('change', function () {
    gulp.src(['./index.html', './dist/*.js'])
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return rollup.rollup({
        entry: 'src/main.js',
        plugins: [
            resolve(),
            commonjs(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('development'),
                'process.env.VUE_ENV': JSON.stringify('browser')
            }),
            vue(),
            babel({
                exclude: "node_modules/**"
            })
        ]
    }).then(function (bundle) {
        bundle.write({
            format: "iife",
            dest: "dist/monitor.dist.js"
        })
    })
});

gulp.task("js-watch", ["js"], function (done) {
    browserSync.reload();
    done();
});