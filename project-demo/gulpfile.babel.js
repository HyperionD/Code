import gulp from "gulp";
import exec from "gulp-exec";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import config from "./config.js";


gulp.task("pack", function() {
    return gulp.src("")
        .pipe(exec("webpack --config webpack.config.babel.js"));
});

gulp.task("uglify", function() {
    return gulp.src(config.dist_js)
        .pipe(gulp.dest(config.dist_dir))
        .pipe(uglify())
        .pipe(rename({ extname: ".min.js" }))
        .pipe(gulp.dest(config.dist_dir));
});

gulp.task("watch", function() {
    gulp.watch("app/src/**/*.vue", ["pack"]);
});
