const express = require("express");
const {
  createTask,
  getAllTasks,
  updateTaskById,
  deleteTaskById,
} = require("../Controllers/TaskController");
const taskRouter = express.Router();

taskRouter.route("/").post(createTask).get(getAllTasks);

taskRouter.route("/:id").patch(updateTaskById).delete(deleteTaskById);

module.exports = taskRouter;
