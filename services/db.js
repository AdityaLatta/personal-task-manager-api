import { sequelize } from "../models/index.js";

const connectDb = async () => {
    try {
        await sequelize.authenticate();

        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error connecting to database ", error.message);
        process.exit(1);
    }
};

export { connectDb };
