const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const Survey = mongoose.model("Survey", itemSchema);
module.exports = Survey;
