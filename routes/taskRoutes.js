import { Router } from "express";
import {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
} from "../controllers/taskController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.use(authMiddleware);

router.route("/").get(getTasks).post(createTask);

router.route("/:id").get(getTaskById).put(updateTask).delete(deleteTask);

export default router;
