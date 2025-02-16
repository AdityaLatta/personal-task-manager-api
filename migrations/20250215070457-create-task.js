"use strict";
/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tasks", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.TEXT,
        },
        priority: {
            type: Sequelize.ENUM("low", "medium", "high"),
            allowNull: false,
            defaultValue: "medium",
        },
        dueDate: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        status: {
            type: Sequelize.ENUM("pending", "completed"),
            allowNull: false,
            defaultValue: "pending",
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: { model: "Users", key: "id" },
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn("NOW"),
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn("NOW"),
        },
    });
}
export async function down(queryInterface) {
    await queryInterface.dropTable("Tasks");
}
