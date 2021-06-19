const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  number: {
    type: String,
  },
  email: {
    type: String,
  },
  city: {
    type: String,
  },
  count: {
    type: String,
  },
});
module.exports = mongoose.model("users", userSchema);
