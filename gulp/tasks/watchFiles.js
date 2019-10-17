var gulp = require("gulp");
var browserSync = require("./runBSync").instance;
var compileSASS = require("./compileSASS");

function templates(e) {
  console.log(e + " templates here... " + e);
  return gulp.src(e).pipe(browserSync.stream()); //.pipe(browserSync.reload({ stream: true }));
}

function styles(e) {
  console.log(e + "  styles here...");
  return gulp.src(e).pipe(browserSync.stream());
}

function scripts(e) {
  console.log(e + "  scripts here...");
  return gulp.src(e).pipe(browserSync.stream());
}

function watchFiles(params) {
  gulp.watch("**/static/scss/**/*.scss").on("change", compileSASS);
  gulp.watch("**/static/**/*.js").on("change", scripts);
  gulp.watch("**/static/**/*.css").on("change", styles);
  gulp.watch("**/templates/**/*.html").on("change", templates);
  gulp.watch(["**/**/*.py"]).on("change", browserSync.reload);
  // gulp
  //   .watch(["**/**/*.sqlite"])
  //   .on("change", browserSync.reload);
}

/* function templates(e) {
	console.log(`${e}` + 'styles here...');
	return gulp.src(`${e}`).pipe(browserSync.reload({ stream: true }));
} */

module.exports = watchFiles;
