var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var babel = require('gulp-babel');

gulp.task('sass', function() {
    return gulp.src('./assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        //.pipe(concat('app.css'))
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('js', function() {
    return gulp.src('./assets/js/app.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function () {
    gulp.watch('./assets/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass']);