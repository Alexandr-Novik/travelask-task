let gulp = require('gulp');
const { dest } = require('vinyl-fs');
let gulp_cssnano = require('gulp-cssnano');
let gulp_htmlmin = require('gulp-htmlmin');

gulp.task('css', function () {
    return gulp.src('./css/main/*.css')
        .pipe(gulp_cssnano())
        .pipe(dest('./css/'))
});

gulp.task('html', function () {
    return gulp.src('./html/*.html')
        .pipe(gulp_htmlmin({ collapseWhitespace: true }))
        .pipe(dest('./'))
});