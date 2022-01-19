const mongoose = require("mongoose");

var Task = mongoose.model("Task", {
  name: { type: String },
  description: { type: String },
  createdDate: { type: Date },
  deleted: { type: Number },
});

module.exports = { Task };
