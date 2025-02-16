import { Sequelize } from "sequelize";
import dbConfig from "../config/config.js";

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        port: dbConfig.port,
        logging: false,
    }
);

export { sequelize };
