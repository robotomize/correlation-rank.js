"use strict";

const gulp = require("gulp");
const babel = require("gulp-babel");
const watch = require('gulp-watch');

gulp.task("default", () => {
    gulp.src("./src/index.js")
        .pipe(babel({
            plugins: ["transform-runtime"]
        }))
        .pipe(gulp.dest("dist/"));
});

gulp.task('watch', function() {
    gulp.watch('./src/**', ['transform']);
});