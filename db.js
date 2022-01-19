const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/annomo", (err) => {
  if (err) {
    console.log("Error: ", err);
  } else {
    console.log("MongoDb Connected.");
  }
});

module.exports = mongoose;
