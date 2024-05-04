const TaskModel = require("../Models/TaskModel");
const {
  createResourceFactory,
  getAllResourceFactory,
  updateResourceById,
  deleteResourceById,
} = require("../utils/resourceFactory");

const createTask = createResourceFactory(TaskModel);
const getAllTasks = getAllResourceFactory(TaskModel);
const updateTaskById = updateResourceById(TaskModel, "Task");
const deleteTaskById = deleteResourceById(TaskModel, "Task");

module.exports = {
  createTask,
  getAllTasks,
  updateTaskById,
  deleteTaskById,
};
