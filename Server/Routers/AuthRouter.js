const express = require("express");

const authRouter = express.Router();

authRouter.post("/login", loginController);
authRouter.post("/signup", signupController);

module.exports = authRouter;
