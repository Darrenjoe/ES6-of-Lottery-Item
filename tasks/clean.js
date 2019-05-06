import gulp from "gulp";
import del from "del";
import args from "./util/args";

gulp.task('clean', gulp.series(() => {
  return del(['server/public', 'server/views'])
}));
