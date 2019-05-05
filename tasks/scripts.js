import gulp from "gulp";
import gulpif from "gulp-if";
import concat from "gulp-concat";
import webpack from "webpack";
import gulpWebpack from "webpack-stream";
import named from "vinyl-named";
import livereload from "gulp-livereload";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import gulify from "gulp-uglify";
import { log, colors } from "gulp-util";
import args from "./util/args";

gulp.task('scripts', () => {
  return gulp.src(['app/js/index/js'])
    .pipe(plumber({
      errorHandler: function() {

      }
    }))
    .pipe(named())
    .pipe(gulpWebpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel'
        }]
      }
    }), null, (err, stats) => {
      log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
        chunls: false
      }))
    })
    .pipe(gulp.dest('server/publick/js'))
    .pipe(rename({
      basename: 'cp',
      extname: '.min.js'
    }))
    .pipe(uglify({compress: {properties: false}, output: {'quote_keys': true}}))
    .pipe(gulp.dest('server/publick/js'))
    .pipe(gulpif(args.watch, livereload()))
})

