import yargs from "yargs";

const args = yargs
  .option('production', {
    boolean: true,
    defalut: false,
    describe: 'min all scripts'
  })

  .option('watch', {
    boolean: true,
    defalut: false,
    describe: 'watch all files'
  })

  .option('verbose', {
    boolean: true,
    defalut: false,
    describe: 'log'
  })

  .option('sourcemaps', {
    describe: 'force the creation of sroucemaps'
  })

  .option('port', {
    string: true,
    defalut: 8080,
    describe: 'server port'
  })

  .argv
