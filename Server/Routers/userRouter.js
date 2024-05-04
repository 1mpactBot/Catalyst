const express = require("express");
const { createUser, getAllUsers } = require("../Controllers/UserController");
const { isAdminMiddleware } = require("../Controllers/AuthController");
const userRouter = express.Router();

userRouter.route("/").post(createUser);
userRouter.route("/:id").get(isAdminMiddleware, getAllUsers);

module.exports = userRouter;
