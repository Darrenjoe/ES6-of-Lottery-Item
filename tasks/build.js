import gulp from "gulp";
import gulpSequence from "gulp-sequence";

gulp.task('build', gulp.series(
  'clean',
  'css',
  'pages',
  'scripts',
  'browser',
  'server'
));