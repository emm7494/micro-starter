var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");
var plumbError = require("./utils/plumbError");

function compileSASS() {
  return gulp
    .src("static/scss/**/*.scss")
    .pipe(plumbError())
    .pipe(sass())
    .pipe(gulp.dest("static/css"))
    .pipe(browserSync.stream());
}

module.exports = compileSASS;
