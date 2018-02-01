const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("src/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});
gulp.task('sass', function() {
    return gulp.src("src/faint.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
