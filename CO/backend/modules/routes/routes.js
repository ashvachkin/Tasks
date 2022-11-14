import { Router } from "express";
const router = Router();

import {
  getAllTasks,
  createNewTask,
  changeTaskInfo,
  deleteTask,
} from "../controllers.js";

router.get("/allTasks", getAllTasks);
router.post("/createTask", createNewTask);
router.patch("/updateTask/:id", changeTaskInfo);
router.delete("/deleteTask/:id", deleteTask);

export default router;
