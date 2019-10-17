var gulp = require("gulp");

function getTask(foundTasks, currentTask) {
  var task = require("./tasks/" + currentTask);
  return { ...foundTasks, [currentTask]: task };
}

function loadTasks(taskList) {
  return taskList.reduce(getTask, {});
}

module.exports = loadTasks;

// taskList.reduce((foundTasks, currentTask) => ({...foundTasks,}), {});
