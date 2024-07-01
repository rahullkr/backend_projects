const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  const salt = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(user.password, salt);
  user.password = hashPass;
  next();
});

userSchema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.genJWT = function generate() {
  return jwt.sign(
    {
      id: this._id,
      email: this.email,
    },
    "user_secret",
    { expiresIn: "1h" }
  );
};

const User = mongoose.model("User", userSchema);
module.exports = User;
