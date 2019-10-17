var gulp = require("gulp");
var tasks = require("./gulp")([
  "compileSASS",
  "runFlask",
  "runBSync",
  "watchFiles"
]);

module.exports = {
  default: gulp.series(
    tasks.compileSASS,
    tasks.runFlask,
    tasks.runBSync,
    tasks.watchFiles
  ),
  build: gulp.series(tasks.compileSASS)
};
