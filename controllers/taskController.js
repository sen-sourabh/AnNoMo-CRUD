const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { Task } = require("../models/task");

//localhost:3000/tasks/
router.get("/", (req, res) => {
  Task.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error in retriving tasks: ", err);
    }
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No record with given id: ${req.params.id} `);
  }

  Task.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error in retriving single task: ", err);
    }
  });
});

router.post("/", (req, res) => {
  var task = new Task({
    name: req.body.name,
    description: req.body.description,
    createdDate: new Date(),
    deleted: 0,
  });
  task.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in Save Tasks:", err);
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No record with given id: ${req.params.id} `);
  }
  var task = {
    name: req.body.name,
    description: req.body.description,
  };
  Task.findByIdAndUpdate(
    req.params.id,
    { $set: task },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log("Error in Update Tasks:", err);
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).send(`No record with given id: ${req.params.id} `);
  }
  Task.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log("Error in delete task: ", err);
    }
  });
});

module.exports = router;
