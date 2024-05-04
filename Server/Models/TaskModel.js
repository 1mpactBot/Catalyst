const mongoose = require("mongoose");

const taskSchemaRules = {
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: Number,
    required: true,
    default: 0,
  },
  assignedTo: {
    type: mongoose.Schema.ObjectId,
    ref: "UserModel",
    default: "6612db1a30a11dc95f8a3ab1",
  },
  priority: {
    type: String,
    required: true,
    enum: ["major", "medium", "minor"],
    default: "minor",
  },
  updated: Date,
};

const taskSchema = new mongoose.Schema(taskSchemaRules, { timestamps: true });

const TaskModel = new mongoose.model("TaskModel", taskSchema);

module.exports = TaskModel;
