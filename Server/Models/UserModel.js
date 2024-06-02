const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    salt: String,
    otp: {
      type: String,
    },
    otpExpiry: {
      type: Date,
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
  })
  .get(function () {
    return this._password;
  });

userSchema.pre("save", async function (next) {
  this.salt = await bcrypt.genSalt(10);
  this.confirmPassword = await bcrypt.hash(this._password, this.salt);
  next();
});

// dynamic list of roles
let roles = ["admin", "user", "vendor", "buyers"];
userSchema.pre("save", function (next) {
  if (roles.includes(this.role)) {
    next();
  } else {
    next("role is not defined");
  }
});

const UserModel = new mongoose.model("UserModel", userSchema);
module.exports = UserModel;
