import { DataTypes } from "sequelize";
import { sequelize } from "./index.js";

export const Task = sequelize.define(
    "Task",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
        },
        priority: {
            type: DataTypes.ENUM("low", "medium", "high"),
            allowNull: false,
            defaultValue: "medium",
        },
        dueDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM("pending", "completed"),
            allowNull: false,
            defaultValue: "pending",
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: "Users", key: "id" },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
    },
    {
        timestamps: true,
    }
);
