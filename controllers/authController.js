import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export async function register(req, res) {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const hashedPassword = await hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        res.status(201).json({ success: true, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: "All fields are required" });
        }

        const user = await User.findOne({ where: { email } });
        const isPasswordMatch =
            user && (await compare(password, user.password));

        if (!user || !isPasswordMatch) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.cookie("token", token);

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
