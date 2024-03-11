import Task from "../models/taskModel.js";

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    next(error);
  }
};

export const addTask = async (req, res, next) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    next(error);
  }
};

export const changeTaskStatus = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    task.done = req.body.done;
    await task.save();
    res.send(task);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.send({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};
