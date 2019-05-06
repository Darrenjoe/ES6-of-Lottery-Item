import gulp from "gulp";
import gulpif from "gulp-if";
import liveserver from "gulp-live-server";
import args from "./util/args";

gulp.task('server', gulp.series(() => {
  if (!args.watch) return cb();

  var server = liveserver.new(['--harmony', 'server/bin/www']);
  server.start();

  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file) {
    server.notify.apply(server, [flie]);
  })

  gulp.watch(['server/routers/**/*.js', 'server/app.js'], function() {
    server.start.bind(server)()
  });
}));