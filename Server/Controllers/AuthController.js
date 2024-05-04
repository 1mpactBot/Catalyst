const UserModel = require("../Models/UserModel");
const isAdminMiddleware = async (req, res, next) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (user.role == "admin") {
      next();
    } else {
      res.status(401).json({
        status: "failure",
        message: "You are not authorised.",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "failure",
      message: err.message,
    });
  }
};

module.exports = { isAdminMiddleware };
