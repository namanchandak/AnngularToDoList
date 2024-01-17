const express = require('express');
const todo = express.Router();
const tododb = require("./tododb")

todo.post("/", (req, res) => {
   let task = req.body.task;
   let desc = req.body.desc;

   if (!task) {
    return res.status(404).json({ message: "todo not added - task is missing" });
 }
 if (!desc) {
    return res.status(200).json({ message: "todo added without description" });
 }

   tododb.addTodo(task, desc);
   return res.status(200).json({ message: "todo added" });
});


todo.get("/", (req, res) => {
   res.send(JSON.stringify(tododb))
});



module.exports = todo;
