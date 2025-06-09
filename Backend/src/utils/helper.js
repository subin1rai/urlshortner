import { nanoid } from "nanoid";
import { cookieOptions } from "../config/config.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

export const generateNanoId = (length) => {
    return nanoid(length);
}

export const signToken = (payload) => {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"});
}

export const verifyToken = (token) => {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    return decoded.id;
}

// Password hashing functions
export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
}
