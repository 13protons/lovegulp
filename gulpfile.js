var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var serve = require('gulp-serve');

gulp.task('scripts', function(){
  gulp.src('./src/js/*.js') //get all files with .js extension
    .pipe(concat('main.js'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('./public/js'))
})

gulp.task('move', function(){
  gulp.src('./src/index.html').pipe(gulp.dest('./public'));
  gulp.src('./src/css/**').pipe(gulp.dest('./public/css'));
  gulp.src('./src/img/**').pipe(gulp.dest('./public/img'));
})

gulp.task('serve', serve({
    root: ['public'],
    port: 1337
}));

gulp.task('default', ['scripts', 'move', 'serve'], function(){
  gulp.watch('./src/js/*.js', ['scripts']);
  gulp.watch(['./src/index.html', './src/css/**', './src/img/**'], ['move']);
})
