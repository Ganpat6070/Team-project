const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified : {
    type: String,
    required: true,
    // default : "false"
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
