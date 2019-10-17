var exec = require("child_process").exec;
var flaskProcess = require("child_process").exec("flask run");

/* Run Flask Server */
function runFlask(done) {
  flaskProcess.stdout.on("data", function(data) {
    console.log(data);
  });
  flaskProcess.stderr.on("data", function(data) {
    console.log(data);
  });
  done();
}

module.exports = runFlask;
