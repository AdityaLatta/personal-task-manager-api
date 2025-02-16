/* eslint-disable no-unused-vars */
const errorMiddleware = (err, req, res, next) => {
    console.error("Error:", err);

    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).json({
        success: false,
        error: message,
    });
};

export default errorMiddleware;
