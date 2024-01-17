const express = require('express');
const todo = express.Router();

todo.post("/", (req, res) => {
   let task = req.body.task;
   let desc = req.body.desc;

   if (!task) {
      return res.status(404).json({ message: "todo not added" });
   }
   if (!desc) {
      return res.status(200).json({ message: "todo added without description" });
   }

   // You may want to add the task and desc to your todos array or database here

   return res.status(200).json({ message: "todo added" });
});

module.exports = todo;
