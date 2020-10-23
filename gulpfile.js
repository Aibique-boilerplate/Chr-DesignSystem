var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

gulp.task('hello',async () => {
  console.log('Bebes de luz');
});

gulp.task('sass', async () =>{
  return gulp.src('scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/stylesheets'))
});

//this task will take teh scss files, convert into css
//minifyCSS will compress them
//concat will concat all the files
//finally send them to public/stylesheets
gulp.task('style_min', async () => {
  return gulp
  .src('scss/**/*.scss')
  .pipe(sass())
  .pipe(minifyCSS())
  .pipe(concat('style_main.min.css'))
  .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('watch', async () => {
  gulp.watch('scss/**/*.scss',
  gulp.series('style_min'));
});