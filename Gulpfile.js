var gulp     = require('gulp'),
sass         = require('gulp-sass'),
plumber      = require('gulp-plumber'),
autoprefixer = require('gulp-autoprefixer'),
browserSync  = require('browser-sync'),
reload       = browserSync.reload,
name         = 'mickey',
src          = 'src/',
dist         = 'test/';


gulp.task('styles', function(){
  gulp.src('*.scss')
  .pipe(plumber())
  .pipe(sass({style: 'compressed', "sourcemap=none": true }))
  .pipe(sass({style: 'compressed'}))
  .pipe(autoprefixer('last 2 version'))
  .pipe(gulp.dest(dist + 'css/'))
  .pipe(reload({stream:true}));
});


gulp.task('html', function () {
  gulp.src(dist+'*.html')
  .pipe(reload({stream: true}));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: "./test"
    }
  });
});


gulp.task('watch', function(){
  gulp.watch(['*.scss', '**/*.scss'], ['styles']);
  gulp.watch(dist+'*.html', ['html']);
});

gulp.task('default', ['styles', 'watch', 'browser-sync']);
