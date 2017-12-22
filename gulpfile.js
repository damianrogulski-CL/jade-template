var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var pug = require('gulp-pug');

gulp.task('sass', function() {
  gulp.src('src/styles/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.scss', ['sass'])
  gulp.watch('src/views/**/*.pug', ['views'])
});

gulp.task('views', function buildHTML() {
  return gulp.src('src/views/**/*.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['sass', 'views', 'watch']);
