import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  text: { type: String, required: true},
  done: { type: Boolean, default: false}
})

const Task = model("Task", taskSchema, "tasks");

export default Task;