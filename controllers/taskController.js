import { Op } from "sequelize";
import { Task } from "../models/task.js";

export async function getTasks(req, res) {
    try {
        const {
            priority,
            status,
            startDate,
            endDate,
            sortBy,
            order = "asc",
        } = req.query;

        const where = { userId: req.user.id };

        if (priority) where.priority = priority;
        if (status) where.status = status;
        if (startDate && endDate) {
            where.dueDate = {
                [Op.between]: [startDate, endDate],
            };
        }

        const orderBy = [];

        if (sortBy) {
            orderBy.push([sortBy, order.toUpperCase()]);
        }

        const tasks = await Task.findAll({ where, order: orderBy });

        res.status(200).json({ success: true, tasks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function getTaskById(req, res) {
    try {
        const id = req.params.id;
        const userId = req.user.id;

        const task = await Task.findOne({
            where: { id, userId },
        });

        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.status(200).json({ success: true, task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function createTask(req, res) {
    try {
        const { title, description, priority, dueDate, status } = req.body;
        const userId = req.user.id;

        if (!title) {
            return res.status(400).json({ error: "Title id required" });
        } else if (!description) {
            return res.status(400).json({ error: "Description id required" });
        } else if (!dueDate) {
            return res.status(400).json({ error: "Due Date id required" });
        }

        const task = await Task.create({
            title,
            description,
            priority,
            dueDate,
            status,
            userId,
        });

        res.status(201).json({ success: true, task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function updateTask(req, res) {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const { title, description, priority, dueDate, status } = req.body;

        if (!id || isNaN(id)) {
            return res.status(400).json({ error: "Invalid Task ID" });
        }

        const task = await Task.findOne({ where: { id, userId } });

        if (!task) {
            return res.status(404).json({ error: "Task not found" });
        }

        const updatedFields = {};
        if (title !== undefined) updatedFields.title = title;
        if (description !== undefined) updatedFields.description = description;
        if (priority !== undefined) updatedFields.priority = priority;
        if (dueDate !== undefined) updatedFields.dueDate = dueDate;
        if (status !== undefined) updatedFields.status = status;

        await task.update(updatedFields);

        res.status(200).json({ success: true, task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        const userId = req.user.id;

        if (!id || isNaN(id)) {
            return res.status(400).json({ error: "Invalid Task ID" });
        }

        const deletedRows = await Task.destroy({ where: { id, userId } });

        if (!deletedRows) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
