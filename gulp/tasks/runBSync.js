var browserSync = require("browser-sync").create();

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

module.exports = runBSync;
module.exports.instance = browserSync;
