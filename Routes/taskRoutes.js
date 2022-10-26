import express from "express";
const router = express.Router()

import { addTask , allTask, deleteTaskById } from "../Controllers/taskController.js";

router.route("/addTask").post(addTask)
router.route("/allTask").get(allTask)
router.route("/deleteTask/:id").delete(deleteTaskById)

export default router;