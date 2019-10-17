var notify = require("gulp-notify");
var plumber = require("gulp-plumber");
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

module.exports = plumbError;
