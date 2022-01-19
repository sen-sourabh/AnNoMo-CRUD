const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db.js");
var taskController = require("./controllers/taskController.js");

var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log("Server listening at port 3000..."));

app.use("/tasks", taskController);
