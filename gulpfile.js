var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var cache = require("gulp-cache");
var exec = require("child_process").exec;
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
var sass = require("gulp-sass");
var notify = require("gulp-notify");

/* Global Function Declarations */
function plumbError() {
  return plumber({
    errorHandler: function(err) {
      notify.onError({
        templateOptions: {
          date: new Date()
        },
        title: "Error in" + err.plugin,
        message: err.toString()
      })(err);
      this.emit("end");
    }
  });
}

/* Run Flask Server */
function runFlask(done) {
  var flaskProcess = exec("flask run");
  flaskProcess.stdout.on("data", function(data) {
    console.log(data);
  });
  flaskProcess.stderr.on("data", function(data) {
    console.log(data);
  });
  done();
}

function runBSync(done) {
  browserSync.init({
    notify: {
      styles: {
        top: "auto",
        bottom: "0",
        margin: "0px",
        padding: "5px",
        position: "fixed",
        fontSize: "12px",
        zIndex: "9999",
        borderRadius: "5px 0px 0px",
        color: "white",
        textAlign: "center",
        display: "block",
        backgroundColor: "rgba(27, 32, 50, 0.7)"
      }
    },
    online: false,
    //		ws: true,
    //		injectChanges: true,
    //reloadOnRestart: false,
    //watch: true,
    //	files: [ 'static/**/*.css', 'static/**/*.js' ],
    proxy: "http://0.0.0.0:9090"
  });
  done();
}

function compileSASS() {
  return gulp
    .src("static/scss/**/*.scss")
    .pipe(plumbError())
    .pipe(sass())
    .pipe(gulp.dest("static/css"))
    .pipe(browserSync.stream());
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

function templates(e) {
  console.log(e + " templates here... " + e);
  return gulp
    .src(e)
    .pipe(plumbError())
    .pipe(browserSync.stream()); //.pipe(browserSync.reload({ stream: true }));
}

function styles(e) {
  console.log(e + "  styles here...");
  return gulp
    .src(e)
    .pipe(plumbError())
    .pipe(browserSync.stream());
}

function scripts(e) {
  console.log(e + "  scripts here...");
  return gulp
    .src(e)
    .pipe(plumbError())
    .pipe(browserSync.stream());
}

function clearCache() {
  cache.clearAll();
}

function defaultTask(done) {
  //gulp.series(runFlask, watch);
  //runFlask();
  //watch();
  runFlask();
  runBSync();
  watchFiles();
  done();
}

module.exports = {
  default: gulp.series(compileSASS, runFlask, runBSync, watchFiles),
  build: gulp.series(compileSASS)
};
