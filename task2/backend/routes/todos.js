import express from "express";
import jwt from "jsonwebtoken";
import Todo from "../model/Todo.js";

const router = express.Router();

router.use((req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(403);
  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
});

router.get("/", async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });
  res.json(todos);
});

router.post("/", async (req, res) => {
  const todo = new Todo({ ...req.body, userId: req.user.id });
  await todo.save();
  res.status(201).json(todo);
});

router.put("/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
