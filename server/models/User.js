const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const User = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  static: {
    win: { type: Number, default: 0 },
    draw: { type: Number, default: 0 },
    defeat: { type: Number, default: 0 },
  },
});

module.exports = model("User", User);
