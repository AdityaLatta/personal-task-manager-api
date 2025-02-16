import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.cookies?.token;

    if (!token) {
        return res
            .status(401)
            .json({ error: "Access denied, please login first" });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(400).json({ error: "Invalid token" });
    }
};

export default authMiddleware;
