const UserModel = require("../Models/UserModel");
const {
  createResourceFactory,
  getAllResourceFactory,
} = require("../utils/resourceFactory");

const createUser = createResourceFactory(UserModel);
//Admin controller
const getAllUsers = getAllResourceFactory(UserModel);

module.exports = { createUser, getAllUsers };
