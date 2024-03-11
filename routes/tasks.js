import { Router } from "express";

import { getTasks, addTask, changeTaskStatus, deleteTask } from "../controller/tasksController.js";

const router = Router();

router
  .route("/")
  .get(getTasks)
  .post(addTask);

router
  .route("/:id")
  .patch(changeTaskStatus)
  .delete(deleteTask)

export default router;