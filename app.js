import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (_, res) => {
    res.send("Hello from server");
});

app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

app.use(errorMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
